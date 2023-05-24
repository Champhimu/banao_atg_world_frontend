import * as Yup from 'yup';

// validation schema for registration form
const registerSchema = () => Yup.object({
    username:Yup.string().test('Valid Character?','Name is Invalid',(str)=> !(/[^a-zA-Z\s]+/.test(str))).min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Enter your password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-7])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    cpassword:Yup.string().required("Enter confirm password").oneOf([Yup.ref('password'),null],"Password does not match")
})

export default registerSchema