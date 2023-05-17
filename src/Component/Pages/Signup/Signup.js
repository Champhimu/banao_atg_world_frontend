import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import abstract from "../../../Asset/images/atg_illustration.png";
import Login from "./Login";
import { MyContext } from "../../../App";

const Signup = () => {
  const { setIsSignedIn } = useContext(MyContext);

  // console.log("Signup: " + isSignedIn);

  return (
    <>
      <div>

        {/* <!-- SignUp Desktop View --> */}
        <div
          className="modal fade"
          id="staticBackdrop"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <button
            className="closebtn"
            style={{
              position: "relative",
              border: "none",
              top: "14%",
              left: "75%",
              borderRadius: "100%",
              backgroundColor: "white",
              opacity: 0.7,
            }}
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <MdOutlineClose fontSize={"1.5em"} style={{}} />
          </button>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div
              style={{ borderRadius: "8px", border: "none" }}
              className="modal-content"
            >
              <div
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  border: "none",
                  backgroundColor: "#EFFFF4",
                  color: "#008A45",
                  fontSize: "15px",
                }}
                className="modal-header"
              >
                <h6
                  style={{ margin: "0 auto" }}
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </h6>
              </div>
              <div className="modal-body">
                <div
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 style={{ fontWeight: "700" }}>Create Account</h3>
                  <p style={{ fontSize: "15px" }}>
                    Already have an account?{" "}
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#signupmodal"
                      data-bs-dismiss="modal"
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      Sign In
                    </span>
                  </p>
                </div>
                <br />
                <div
                  style={{
                    marginBottom: "5px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        style={{
                          height: "45px",
                          borderRight: "none",
                          borderRadius: "0px",
                          backgroundColor: "#F7F8FA",
                        }}
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        aria-describedby="addon-wrapping"
                      />
                      <input
                        style={{
                          height: "45px",
                          borderRadius: "0px",
                          backgroundColor: "#F7F8FA",
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                    <input
                      style={{
                        height: "45px",
                        borderTop: "none",
                        borderRadius: "0px",
                        backgroundColor: "#F7F8FA",
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-describedby="addon-wrapping"
                    />
                    <input
                      style={{
                        height: "45px",
                        borderTop: "none",
                        borderRadius: "0px",
                        backgroundColor: "#F7F8FA",
                      }}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-describedby="addon-wrapping"
                    />
                    <input
                      style={{
                        height: "45px",
                        borderTop: "none",
                        borderRadius: "0px",
                        backgroundColor: "#F7F8FA",
                      }}
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-describedby="addon-wrapping"
                    />
                    <button
                      onClick={() => setIsSignedIn(true)}
                      data-bs-dismiss="modal"
                      style={{
                        height: "45px",
                        marginTop: "15px",
                        borderRadius: "25px",
                        width: "100%",
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Create Account
                    </button>
                    <br />
                    <br />
                    <button
                      onClick={() => setIsSignedIn(true)}
                      data-bs-dismiss="modal"
                      style={{
                        height: "40px",
                        marginBottom: "5px",
                        width: "100%",
                        borderColor: "#D9D9DB",
                      }}
                      className="btn btn-sm"
                      type="button"
                    >
                      <FaFacebook color="blue" fontSize={"1.2em"} /> Sign up
                      with Facebook
                    </button>
                    <button
                      onClick={() => setIsSignedIn(true)}
                      data-bs-dismiss="modal"
                      style={{
                        height: "40px",
                        width: "100%",
                        borderColor: "#D9D9DB",
                      }}
                      className="btn btn-sm"
                      type="button"
                    >
                      <FcGoogle fontSize={"1.2em"} /> Sign up with Google
                    </button>
                  </div>
                  <div style={{ display: "grid", width: "50%" }}>
                    <img
                      style={{ margin: "0 auto" }}
                      alt="abstract"
                      src={abstract}
                    />
                    <p
                      style={{
                        marginTop: "10px",
                        textAlign: "center",
                        color: "gray",
                        fontSize: "11px",
                      }}
                    >
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SignUp Mobile View- Bottom */}
      <div
        style={{ borderRadius: "8px 8px 0px 0px", height: "500px" }}
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="createaccountcanvas"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h3
            style={{
              fontWeight: "700",
              marginTop: "5px",
              marginBottom: "-5px",
            }}
          >
            Create Account
          </h3>
          <button
            style={{ marginBottom: "-5px" }}
            type="button"
            className="btn text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <MdOutlineClose
              color="white"
              style={{
                backgroundColor: "black",
                borderRadius: "50%",
                fontSize: "1.2em",
              }}
            />
          </button>
        </div>
        <div className="offcanvas-body">
          <div style={{ display: "flex" }}>
            <input
              style={{
                height: "45px",
                borderRight: "none",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
              }}
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-describedby="addon-wrapping"
            />
            <input
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
              }}
              type="text"
              className="form-control"
              placeholder="Last Name"
              aria-describedby="addon-wrapping"
            />
          </div>
          <input
            style={{
              height: "45px",
              borderTop: "none",
              borderRadius: "0px",
              backgroundColor: "#F7F8FA",
            }}
            type="text"
            className="form-control"
            placeholder="Email"
            aria-describedby="addon-wrapping"
          />
          <input
            style={{
              height: "45px",
              borderTop: "none",
              borderRadius: "0px",
              backgroundColor: "#F7F8FA",
            }}
            type="password"
            className="form-control"
            placeholder="Password"
            aria-describedby="addon-wrapping"
          />
          <input
            style={{
              height: "45px",
              borderTop: "none",
              borderRadius: "0px",
              backgroundColor: "#F7F8FA",
            }}
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            aria-describedby="addon-wrapping"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={() => setIsSignedIn(true)}
              data-bs-dismiss="offcanvas"
              style={{
                height: "45px",
                marginTop: "15px",
                borderRadius: "25px",
                width: "100%",
              }}
              type="button"
              className="btn btn-primary w-50"
            >
              Create Account
            </button>
            <p
              data-bs-toggle="offcanvas"
              data-bs-target="#signupcanvas"
              aria-controls="offcanvasBottom"
              style={{
                color: "#495057",
                textDecoration: "underline",
                cursor: "pointer",
                marginTop: "25px",
                marginBottom: "5px",
              }}
            >
              or, Sign In
            </p>
          </div>
          <br />
          <button
            onClick={() => setIsSignedIn(true)}
            data-bs-dismiss="offcanvas"
            style={{
              height: "40px",
              marginBottom: "10px",
              width: "100%",
              borderColor: "#D9D9DB",
            }}
            className="btn btn-sm"
            type="button"
          >
            <FaFacebook color="blue" fontSize={"1.2em"} /> Sign up with Facebook
          </button>
          <button
            onClick={() => setIsSignedIn(true)}
            data-bs-dismiss="offcanvas"
            style={{
              height: "40px",
              marginBottom: "20px",
              width: "100%",
              borderColor: "#D9D9DB",
            }}
            className="btn btn-sm"
            type="button"
          >
            <FcGoogle fontSize={"1.2em"} /> Sign up with Google
          </button>
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              margin: "0px 40px 0px 40px",
            }}
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
      
      <Login />
    </>
  );
};

export default Signup;
