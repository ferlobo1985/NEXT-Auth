import * as yup from 'yup';

export const authSchema = yup.object({
    email:yup.string()
    .required('Sorry you need a valid email')
    .email('This is not a valid email'),
    password: yup.string()
    .required('Sorry the password is required')
    .max(15,'15 char max')
});