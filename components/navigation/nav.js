import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'


const Navigation = () => {
    const {data: session, status } = useSession();

    return(   
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link href="/">My awesome app</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">


                    { !session && status != 'loading' && (
                    <Link href="/sign_in" passHref>
                        <Nav.Link>Sign in</Nav.Link>
                    </Link>
                    )}

                    { session && status != 'loading' && (
                    <>
                        <Link href="/sign_out" passHref>
                            <Nav.Link onClick={()=>{
                                signOut({callbackUrl:'/'})
                            }}>Sign out</Nav.Link>
                        </Link>

                        <Link href="/dashboard" passHref>
                            <Nav.Link>Dashboard</Nav.Link>
                        </Link>
                    </>
                    )}
                    
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;