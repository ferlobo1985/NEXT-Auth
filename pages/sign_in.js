import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

import { errorHelper } from '../utils/tools'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SignIn = () => {
    const [formType, setFormType] = useState(false);
    const [loading, setLoading] = useState(false);

    const formik= useFormik({
        initialValues:{email:'francis@gmail.com',password:'password123'},
        validationSchema:Yup.object({
            email:Yup.string()
            .required('Sorry the email is required')
            .email('This is not a valid email'),
            password:Yup.string()
            .required('Sorry the password is required')
        }),
        onSubmit:(values)=>{
            submitForm(values)
        }
    })


    const submitForm = (values) => {
        if(formType){
            // register
            axios.post('/api/auth',values)
            .then(response => {
                console.log(response.data)
            })
        } else {
            // sign in
        }
    }

    const handleFormType = ()=>{
        setFormType(!formType)
    }


    return(
        <div>
            <h1>{ formType ? 'Register':'Sign in' }</h1>

            {
                loading ?
                    '...loading'
                :
                <form className='mt-3' onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <TextField
                            style={{width:'100%'}}
                            name="email"
                            label="Enter your email"
                            variant="outlined"
                            {...formik.getFieldProps('email')}
                            {...errorHelper(formik,'email')}
                        />
                    </div>

                    <div className='form-group mt-3'>
                        <TextField
                            style={{width:'100%'}}
                            name="password"
                            label="Enter your password"
                            variant="outlined"
                            type="password"
                            {...formik.getFieldProps('password')}
                            {...errorHelper(formik,'password')}
                        />
                    </div>

                    <div className='mt-3 mb-2'>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            size="small"
                        >
                           { formType ? 'Register':'Sign in'}
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={handleFormType}
                        >
                           { formType ? 
                            'Need to sign in ? Click here'
                            :
                            'Need to register ? Click here'
                            }
                        </Button>
                    </div>


                </form>
            }
        </div>
    )
}

export default SignIn;