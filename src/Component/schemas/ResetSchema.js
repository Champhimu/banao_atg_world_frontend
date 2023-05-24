import * as Yup from 'yup';

// validation schema for reset form
const resetSchema = () => Yup.object({
    password:Yup.string().min(6).required("Enter your password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-7])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    cpassword:Yup.string().required("Enter confirm password").oneOf([Yup.ref('password'),null],"Password does not match")
})

export default resetSchema