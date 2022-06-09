import { getSession } from 'next-auth/react'

const Admin = (props) => {
    return(
        <>
            <h1>Admin</h1>
        </>
    )
}

export const getServerSideProps = async(context) => {
    const session = await getSession({req:context.req});

    if(!session){
        return{
            redirect:{
                destination:'/sign_in',
                permanent:false
            }
        }
    }

    return{
        props:{
            ifNeeded:session
        }
    }    
}



export default Admin;