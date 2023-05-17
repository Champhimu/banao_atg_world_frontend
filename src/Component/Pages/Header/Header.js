import React, { useContext } from "react";
import Logo from "../../../Asset/images/Union 1.png";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { MyContext } from "../../../App";
import User4 from "../../../Asset/images/Rectangle 3 (2).png";

const Header = () => {
  const { isSignedIn } = useContext(MyContext);

  return (
    <>
      <div className="topbar d-none d-md-flex">
        {/* Logo ATG WORLD */}
        <h5 className="logo">
          <span style={{ color: "#27A365" }}>ATG.</span>W
          <span>
            <img style={{ marginBottom: "5px" }} src={Logo} alt="logo" />
          </span>
          RLD
        </h5>

        {/* Search Bar */}
        <div
          style={{ width: "360px", paddingTop: "15px", paddingBottom: "15px" }}
          className="input-group flex-nowrap"
        >
          <span
            style={{
              borderBottomLeftRadius: "21px",
              borderTopLeftRadius: "21px",
              backgroundColor: "#F2F2F2",
              border: "none",
            }}
            className="input-group-text"
            id="addon-wrapping"
          >
            <FiSearch />
          </span>
          <input
            style={{
              fontSize: "13px",
              borderTopRightRadius: "21px",
              borderBottomRightRadius: "21px",
              backgroundColor: "#F2F2F2",
              border: "none",
            }}
            type="text"
            className="form-control"
            placeholder="Search for your favourite groups in ATG"
            aria-describedby="addon-wrapping"
          />
        </div>

        {/* Registration */}
        <div
          style={{
            marginRight: "3%",
            width: "200px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
          className="btn-group"
        >
          {isSignedIn ? (
            <>
              <button
                className="btn btn-sm"
                type="button"
                style={{ textAlign: "right" }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    style={{ marginTop: "-4px", width: "40px", height: "40px" }}
                    src={User4}
                    alt="profile pic"
                  />
                  &nbsp;&nbsp;
                  <p style={{ marginTop: "5px" }}>Siddharth Goyal</p>
                </div>
              </button>
              <button
                disabled
                type="button"
                className="btn btn-sm dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
            </>
          ) : (
            <>
              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="btn btn-sm"
                type="button"
                style={{ textAlign: "right" }}
              >
                Create account.
                <span style={{ color: "blue" }}> It's free!</span>
              </button>
              <button
                disabled
                type="button"
                className="btn btn-sm dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
