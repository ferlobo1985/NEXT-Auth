import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from '../../../utils/database/mongo-db';
import { passwordCheck } from '../../../utils/tools';


export default NextAuth({
    session:{
        ///secret:';ksdjksdfsdfsd',
        jwt:true
    },
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                /// VALIDATION !!!       
                 
                const mongoClient = await connectToDb();

                /// user check
                const user = await mongoClient.db('authpr').collection('users').findOne({
                    email: credentials.email
                });
                if(!user){
                    mongoClient.close();
                    throw new Error('Not a valid user')
                }

                // check pass
                const validPass = await passwordCheck(credentials.password,user.password)
                if(!validPass){
                    mongoClient.close();
                    throw new Error('Wrong password')
                }

                mongoClient.close();
                return { email: user.email }
            }
        })
    ]
})