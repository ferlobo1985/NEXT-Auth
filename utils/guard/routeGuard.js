import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const RouteGuard = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getSession().then(session=>{
            console.log(session)
            if(!session){
                router.push('/sign_in')
            } else {
                setLoading(false)
            }
        })
    },[])

    if(loading){
        return <div>...loading</div>
    }

    return(
        <>
            {props.children}
        </>
    )
}

export default RouteGuard