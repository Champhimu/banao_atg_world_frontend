import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import abstract from "../../../Asset/images/atg_illustration.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import loginSchema from '../../schemas/loginSchema';
import {usernameValidate} from '../../helper/validate';
import { verifyPassword } from "../../helper/helper";

const Login = () => {
  const navigate = useNavigate();
  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });
  
  const formik = useFormik({
    initialValues : {
        username: "",
        password: "",
    },
    validationSchema: loginSchema,
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
        console.log("clicked");
        console.log(values);
        
        // setUsername(values.username);
        let loginPromise = verifyPassword(values);
        console.log(loginPromise);

        toast.promise(loginPromise, {
            loading: 'Checking...',
            success: <b>Login Successfully..</b>,
            error: <b>Password not match!</b>
        })

        loginPromise.then(res => {
            let {token} = res.data;
            localStorage.setItem('token',token);
            // setUsername(values.username);
            // console.log(values.username);
            navigate('/')
            window.location.reload(false);
          })
    }
})

  return (
    <>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="d-flex aligns-items-center justify-content-center card text-center w-60 position-absolute top-50 start-50 translate-middle"
        style={{ width: breakpoints_desktop ? "50%" : "100%" }}>
        

        {breakpoints_desktop && (
          <div className="card-header"
            style={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              border: "none",
              backgroundColor: "#EFFFF4",
              color: "#008A45",
              fontSize: "15px",
            }}>
            <h6 style={{ margin: "0 auto" }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼 </h6>
          </div>
        )}
        <div className="card-body">
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <h3 style={{ fontWeight: "700" }}> {breakpoints_desktop ? "Sign In" : "Welcome back!"} </h3>
            
            {breakpoints_desktop && (
              <p style={{ fontSize: "15px" }}> Don't have an account yet?
                <span onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "blue" }}> Create new for free! </span>
              </p>
            )}
          </div>
          <br />
          <div
            style={{
              marginBottom: "5px",
              marginLeft: "10px",
              marginRight: "10px",
              display: "flex",
              justifyContent: "space-evenly",
            }}>
            <div style={{ width: breakpoints_desktop ? "50%" : "100%" }}>
              <form onSubmit={formik.handleSubmit}>
              <input
                style={{
                  height: "45px",
                  borderRadius: "0px",
                  backgroundColor: "#F7F8FA",
                  marginBottom: "10px",
                }}
                id='username' type="text" className="form-control" placeholder="Enter Username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}
              />
              <p className="text-danger">{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>

              <input
                style={{
                  height: "45px",
                  borderRadius: "0px",
                  backgroundColor: "#F7F8FA",
                }} 
                id='password' type="password" className="form-control" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
              />
              <p className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  style={{
                    height: "45px",
                    marginTop: "15px",
                    borderRadius: "25px",
                    width: breakpoints_desktop ? "100%" : "50%",
                  }}
                  type="submit" className="btn btn-primary"> Sign In
                </button>
                <p
                  style={{
                    color: "#495057",
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginTop: "25px",
                    marginBottom: "5px",
                  }}
                  className="d-md-none d-md-flex" onClick={() => navigate("/register")}> or, Create Account
                </p>
              </div>
              </form>
              <br />
              <br />
              <button
                style={{
                  height: "40px",
                  marginBottom: "5px",
                  width: "100%",
                  borderColor: "#D9D9DB",
                }}
                className="btn btn-sm" type="button"
              >
                <FaFacebook color="blue" fontSize={"1.2em"} /> Sign up with Facebook
              </button>
              <button
                style={{
                  height: "40px",
                  width: "100%",
                  borderColor: "#D9D9DB",
                }}
                className="btn btn-sm" type="button"
              >
                <FcGoogle fontSize={"1.2em"} /> Sign up with Google
              </button>
              <p
                style={{
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginTop: "15px",
                  textAlign: "center",
                }}
                onClick={() => navigate("/forgot/password")}>
                Forgot Password?
              </p>
            </div>
            {breakpoints_desktop && (
              <div style={{ display: "grid", width: "50%" }}>
                <img
                  style={{ margin: "0 auto", marginBottom: "-10px" }}
                  alt="abstract"
                  src={abstract}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
