import toast from 'react-hot-toast';
import { authenticate } from './helper';

/** validate login page username */
export async function usernameValidate(values){
    const errors = {};
    if(values.username){
        // check user exist or not
        const { status } = await authenticate(values.username);
        // console.log("Validated");

        if(status !== 200){
            errors.exist = toast.error('User does not exist...!')
        }

        console.log("UserExist")
    }

    return errors;
}