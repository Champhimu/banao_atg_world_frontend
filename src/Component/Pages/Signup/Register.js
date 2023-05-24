import React, {useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import abstract from "../../../Asset/images/atg_illustration.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import avatar from "../../../Asset/images/profile.png";
import { useFormik } from "formik";
import registerSchema from "../../schemas/registerSchema";
import convertToBase64 from '../../helper/convert';
import { registerUser } from '../../helper/helper';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const navigate = useNavigate();
  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });
  const breakpoints_mobile = useMediaQuery({ query: "(min-width: 400px" });

  const [file, setFile] = useState();

  const formik = useFormik({
      initialValues : {
            username: "",
            email: "",
            password: "",
            cpassword: "",
      },
      validationSchema: registerSchema,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
        console.log("clicked");
        values = await Object.assign(values, {profile : file || ''})
        console.log(values);
        let registerPromise = registerUser(values)

        toast.promise(registerPromise, {
          loading: 'Creating...',
          success: <b>Register Successfully..!</b>,
          error: <b>Could not Register.</b>
        })

        registerPromise.then(function() {navigate('/')});
      }
  })

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    console.log(base64);
  }
    

  return (
    <>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="d-flex aligns-items-center justify-content-center card text-center w-60 position-absolute top-50 start-50 translate-middle"
        style={{
          width: breakpoints_desktop ? "auto" : "90%",
          marginTop: breakpoints_desktop ? "3%" : "20%",
        }}>
        
  
        {breakpoints_desktop && (
          <div className="card-header"
            style={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              border: "none",
              backgroundColor: "#EFFFF4",
              color: "#008A45",
              fontSize: "15px",
            }}
          >
            <h6 style={{ margin: "0 auto" }}> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6>
          </div>
        )}
        <div className="card-body">
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontWeight: "700" }}>Create Account</h3>
            {breakpoints_desktop && (
              <>
                <p style={{ fontSize: "15px" }}> Already have an account?
                  <span onClick={() => navigate("/")} style={{ cursor: "pointer", color: "blue" }}>Sign In</span>
                </p>
              </>
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
              <div style={{ width: breakpoints_desktop ? "100%" : "50" }}>
                <form onSubmit={formik.handleSubmit}>
                <div className="d-flex justify-content-center pb-2">

                  <label htmlFor="profile">
                    <img src={file || avatar} width="100px" className="cursor-pointer w-20 img-fluid rounded-circle" alt="User"/>
                  </label>

                  <input style={{display: 'none'}} onChange={onUpload} type="file" id="profile" name="profile"/>
                </div>

                <input
                  style={{
                    height: "45px",
                    borderRadius: "0px",
                    backgroundColor: "#F7F8FA",
                    marginBottom: "10px",
                  }}
                  id='username' type="text" className="form-control" placeholder="Full Name" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                />
                <p className="text-danger">{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p>

                <input
                  style={{
                    height: "45px",
                    borderRadius: "0px",
                    backgroundColor: "#F7F8FA",
                    marginBottom: "10px",
                  }} 
                  id='email' type="email" className="form-control" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
                <p className="text-danger">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>

                <input
                  style={{
                    height: "45px",
                    borderRadius: "0px",
                    backgroundColor: "#F7F8FA",
                    marginBottom: "10px",
                  }}
                  id='password' type="password" className="form-control" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
                <p className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
                
                <input
                  style={{
                    height: "45px",
                    borderRadius: "0px",
                    backgroundColor: "#F7F8FA",
                  }}
                  id='cpassword' type="password" className="form-control" placeholder="Confirm Password" value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
                />
                <p className="text-danger">{formik.touched.cpassword && formik.errors.cpassword ? formik.errors.cpassword : ""}</p>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button
                    style={{
                      height: "45px",
                      marginTop: "15px",
                      borderRadius: "25px",
                      width: breakpoints_desktop ? "100%" : "50%",
                    }}
                    type="submit" className="btn btn-primary">  Create Account
                  </button>
                  <p
                    style={{
                      color: "#495057",
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: "25px",
                      marginBottom: "5px",
                    }}
                    className="d-md-none d-md-flex" onClick={() => navigate("/")}> or, Sign In
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
                  className="btn btn-sm" type="button">
                  <FaFacebook color="blue" fontSize={"1.2em"} /> Sign up with Facebook
                </button>
                <button
                  style={{
                    height: "40px",
                    width: "100%",
                    borderColor: "#D9D9DB",
                  }}
                  className="btn btn-sm" type="button">
                  <FcGoogle fontSize={"1.2em"} /> Sign up with Google
                </button>
                {breakpoints_mobile && (
                  <p
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      margin: "20px 40px 0px 40px",
                    }}
                    className="d-lg-none d-md-flex">
                    By signing up, you agree to our Terms & conditions, Privacy policy
                  </p>
                )}
              </div>

            {breakpoints_desktop && (
              <div style={{ display: "grid", width: "50%" }}>
                <img
                  style={{ margin: "0 auto", marginBottom: "-10px" }} alt="abstract" src={abstract}
                />
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    color: "gray",
                    fontSize: "12.5px",
                  }}
                >
                  By signing up, you agree to our Terms & conditions, Privacy policy
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
