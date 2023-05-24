import { useFormik } from "formik";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { usernameValidate } from "../../helper/validate";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from '../../store/store';
import { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });

  const setUsername = useAuthStore(state => state.setUsername);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
        username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
        console.log(values)
        setUsername(values.username);
        navigate('/recovery')
        // console.log(username);
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
          <h3 style={{ fontWeight: "700", alignItems: "center" }}> Forgot Password </h3>
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
              id='username' type="text" className="form-control" placeholder="Enter Username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
            <p className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
        </div>
        <button
          style={{
            height: "45px",
            marginTop: "15px",
            borderRadius: "25px",
            width: "50%",
          }}
          type="submit" className="btn btn-primary"> Submit
        </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
