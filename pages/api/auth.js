import { connectToDb } from '../../utils/database/mongo-db'

const handler = async(req,res) => {
    const { email, password } = req.body;

    /// VALIDATION

    const mongoClient = await connectToDb();
    try{
        const db = mongoClient.db('authpr');
        await db.collection('users').insertOne({
            email,
            password
        });
        res.status(200).json({message:'Registered succesfully'})
    } catch(error){
        res.status(500).json({message:'Error',error})
    }
    mongoClient.close();
}

export default handler;