import { connectToDb } from '../../utils/database/mongo-db';
import { passwordHash } from '../../utils/tools';
import { authSchema } from '../../utils/validation';

const handler = async(req,res) => {
    const { email, password } = req.body;

    /// VALIDATION
    try{
        await authSchema.validate({
            email,
            password
        },{ abortEarly: false })
    } catch(error){
        res.status(500).json({message:'Something wrong', error});
        return;
    }


    const mongoClient = await connectToDb();
    const db = mongoClient.db('authpr');

    const checkUser = await db.collection('users').findOne({email});
    if(checkUser){
        res.status(400).json({message:'User exists'});
        return
    }

    try{
        const hashedPass = await passwordHash(password);

        await db.collection('users').insertOne({
            email,
            password: hashedPass
        });
        res.status(200).json({message:'Registered succesfully'})
    } catch(error){
        res.status(500).json({message:'Error',error})
    }
    mongoClient.close();
}

export default handler;