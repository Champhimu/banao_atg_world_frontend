import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../../Asset/images/Union 1.png";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import User4 from "../../../Asset/images/Rectangle 3 (2).png";
import { MyContext } from "../../../App";
import { getUsername } from "../../helper/helper";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  const {loggedIn, setLogedIn} = useContext(MyContext);
  const [apiData, setApiData] = useState({});

  function userLogout(){
    localStorage.removeItem('token')
    navigate('/')
    setLogedIn(false);
  }

  useEffect(() => {
    const fetchData =async () => {
    const { username } = await getUsername();
    const { data } = await axios.get(`/api/user/${username}`);
    // console.log(data)
    setApiData(data);
    }
    fetchData();
  },[])
  return (
    <div className="topbar">
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
        className="input-group flex-nowrap d-none d-md-flex"
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
      {loggedIn ?
      <>
      <div
        style={{
          marginRight: "15px",
          width: "200px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        className="btn-group"
      >
        <div style={{ display: "flex" }}>
        <button
          className="btn btn-sm"
          type="button"
          style={{ textAlign: "right" }}
        >
         <div style={{ display: "flex" }}>

            <img
              style={{ marginTop: "-4px", width: "40px", height: "40px" }}
              src={apiData.profile || User4}
              alt="profile pic"
            />
            &nbsp;&nbsp;
            <p style={{ marginTop: "5px" }}>{apiData.username}</p>
            </div>
        </button>

        <button
          // disabled
          type="button"
          className="btn btn-sm dropdown-toggle dropdown-toggle-split p-0"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* <span className="visually-hidden">Toggle Dropdown</span> */}
          <div class="dropdown-menu">
            <p className="dropdown-item">Profile</p>
            <div class="dropdown-divider"></div>
            <p class="dropdown-item" onClick={userLogout}> Logout</p>
          </div>
        </button>
        </div>
      </div>
      </>  :
      <>
      <button
        type="button"
        className="btn btn-outline-light"
        style={{
          textAlign: "right",
          color: "black",
        }}
        onClick={() => navigate("/register")}
      >
        Create account.
        <span style={{ color: "blue" }}> It's free!</span>
      </button>
      </>
}
    </div>
  );
};

export default Header;

