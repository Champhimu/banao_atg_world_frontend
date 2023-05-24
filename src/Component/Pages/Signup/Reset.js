import React from 'react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { resetPassword } from '../../helper/helper'
import { useAuthStore } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import resetSchema from '../../schemas/ResetSchema'
import { useMediaQuery } from 'react-responsive'

const Reset = () => {

  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });

  const navigate = useNavigate();
  const { username } = useAuthStore(state => state.auth);

    const formik = useFormik({
        initialValues : {
            password: "",
            cpassword: "",
        },
        validationSchema: resetSchema,
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit : async values => {
            let resetPromise = resetPassword({ username, password: values.password })

      toast.promise(resetPromise, {
        loading: 'Updating...',
        success: <b>Reset Successfully...!</b>,
        error : <b>Could not Reset!</b>
      });

      resetPromise.then(function(){ navigate('/') })

        }
    })

  return (
    <>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <div
      className="d-flex aligns-items-center justify-content-center card text-center w-60 position-absolute top-50 start-50 translate-middle"
      style={{
        width: breakpoints_desktop ? "50%" : "90%",
        marginTop: breakpoints_desktop ? "70px" : "100px",
      }}
    >

      <div className="card-body">
        <div
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            justifyContent: "space-between",
          }}>
          <h2 style={{ fontWeight: "700", alignItems: "center", marginBottom: '20px' }}> Reset </h2>
          <h5 style={{ fontWeight: "300", alignItems: "center", marginBottom: '10%' }}> Enter new password </h5>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div style={{ width: breakpoints_desktop ? "100%" : "50" }}>
          <input
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginRight: "8px",
              }}
              id='password' type="password" className="form-control" placeholder="Enter New Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            <p className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>

            <input
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginRight: "8px",
              }}
              id='cpassword' type="password" className="form-control" placeholder="Enter Username" value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            <p className="text-danger">{formik.touched.cpassword && formik.errors.cpassword ? formik.errors.cpassword : ""}</p>
        </div>
        <button
          style={{
            height: "45px",
            marginTop: "15px",
            borderRadius: "25px",
            width: "50%",
          }}
          type="submit" className="btn btn-primary"> Reset
        </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Reset
