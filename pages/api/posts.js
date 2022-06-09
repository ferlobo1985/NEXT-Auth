import { getSession } from 'next-auth/react';


async function Handler(req,res){
    const session = await getSession({req:req})
    if(!session){
        return res.status(401).json({message:'Bro, you need to be auth'})
    }

    res.status(200).json({message:'Here are the admin post'})
}

export default Handler;