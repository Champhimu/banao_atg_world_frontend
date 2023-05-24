import * as Yup from 'yup';

// validation schema for login form
const loginSchema = () => Yup.object({
    username:Yup.string().test('Valid Character?','Name is Invalid',(str)=> !(/[^a-zA-Z\s]+/.test(str))).min(2).max(25).required("please enter your name"),
    password:Yup.string().min(6).required("enter your password"),
})

export default loginSchema