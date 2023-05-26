import React, { useContext, useState } from "react";
import GroupIcon from "../../../Asset/images/Vector.png";
import CardPost from '../Posts/CardPost'
import InfoIcon from "../../../Asset/images/Vector (3).png";
import { MdOutlineLocationOn, MdModeEdit, MdOutlineClose } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";

import FollowUser1 from "../../../Asset/images/Rectangle 6.png";
import FollowUser2 from "../../../Asset/images/Rectangle 6 (1).png";
import FollowUser3 from "../../../Asset/images/Rectangle 6 (2).png";
import FollowUser4 from "../../../Asset/images/Rectangle 6 (3).png";

import { useMediaQuery } from "react-responsive";
import float from "../../../Asset/images/float.png";
import likeicon from "../../../Asset/images/Vector (4).png";
import Banner from "../Banner/Banner";
import { MyContext } from "../../../App";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Article = () => {

  const {loggedIn, setLogedIn} = useContext(MyContext);
  const navigate = useNavigate();
  // const { isSignedIn, setIsSignedIn } = useContext(MyContext);
  const [locationEditEnabled, setLocationEditEnabled] = useState(false);
  const [locationUpdate, setLocationUpdate] = useState("Noida, India");
  const [follow_groups, setFollow_groups] = useState([
    [FollowUser1, "Leisure", false],
    [FollowUser2, "Activism", false],
    [FollowUser3, "MBA", false],
    [FollowUser4, "Philosophy", false],
  ]);

  const Update_followers = (clicked_group) => {
    follow_groups.map(
      (group, index) =>
        group[1] === clicked_group && (follow_groups[index][2] = !group[2])
    );
    setFollow_groups([...follow_groups]);
  }; 

  const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });

  function userLogout(){
    localStorage.removeItem('token')
    localStorage.clear();
    navigate('/')
    setLogedIn(false);
  }

  return (
    <>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <Banner />

      {/* Article Nav */}
      <div
        style={{
          marginTop: "20px",
          marginLeft: breakpoints_desktop ? "15%" : "10%",
          marginRight: "15%",
        }}
      >

        {/* Nav item in Desktop View */}
        {breakpoints_desktop ? (
          <nav
          className= "nav"
            style={{
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a 
                style={{ color: "black" }}
                className="nav-link active"
                aria-current="page"
                href=" "
              >
                All Posts(32)
              </a>
              <a style={{ color: "#8A8A8A" }} className="nav-link" href=" ">
                Article
              </a>
              <a style={{ color: "#8A8A8A" }} className="nav-link" href=" ">
                Event
              </a>
              <a style={{ color: "#8A8A8A" }} className="nav-link" href=" ">
                Education
              </a>
              <a style={{ color: "#8A8A8A" }} className="nav-link" href=" ">
                Job
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ marginRight: "3%", width: "133px" }}
                className="btn-group"
              >
                <button
                  onClick={()=>navigate('/create-post')}
                  className="btn btn-sm"
                  style={{ backgroundColor: "#EDEEF0" }}
                  type="button"
                >
                  Write a Post
                </button>
                <button
                  type="button"
                  style={{ borderColor: "#EDEEF0", backgroundColor: "#EDEEF0" }}
                  className="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split"
                ></button>
              </div>

              {/* If User Signed In Group Button will change */}
              {loggedIn ? (
                <>
                  <button
                    // onClick={() => setIsSignedIn(false)}
                    style={{
                      width: "134px",
                      color: "#6A6A6B",
                      borderColor: "#6A6A6B",
                    }}
                    className="btn btn-sm"
                    type="button"
                  >
                    <span><BsBoxArrowInRight fontSize={"1.5em"} /></span>
                    <span onClick={userLogout}>&nbsp; Leave Group </span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    style={{ width: "134px" }}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="btn btn-sm btn-primary"
                    type="button"
                  >
                    <span>
                      <img src={GroupIcon} alt="Add Group icon" />
                    </span>
                    &nbsp; Join Group
                  </button>
                </>
              )}
            </div>
          </nav>
        ) : (
          <>
          { /* Nav item in Mobile View */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "600", marginLeft: "3.75%" }}>
                Posts(368)
              </p>
              <button
                style={{
                  marginBottom: "10px",
                  marginTop: "-10px",
                  marginRight: "3.75%",
                  backgroundColor: "#F1F3F5",
                  color: "black",
                }}
                className="btn dropdown-toggle"
                type="button"
              >
                Filter: All
              </button>
            </div>
          </>
        )}
      </div>

      {/* Divider */}
      {breakpoints_desktop && (
        <hr style={{ width: "70%", margin: "auto", marginTop: "12px" }} />
      )}

      {/* Article-Left */}
      &nbsp;
      <div
        style={{
          marginLeft: breakpoints_desktop ? "15%" : "0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: breakpoints_desktop ? "50%" : "100%",
            overflowY: "scroll",
            height: breakpoints_desktop ? "83vh" : "94vh",
            border: breakpoints_desktop ? "" : "none",
          }}
        >
          {/* <Card /> */}
          <CardPost />

        </div>

        {/* Article-Right Location */}
        {breakpoints_desktop && (
          <div
            style={{ marginRight: "17.5%", width: "243px", marginTop: "12px" }}
          >
            <div className="input-group flex-nowrap">
              <span
                style={{
                  paddingLeft: "0px",
                  paddingRight: "1px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderColor: "#B8B8B8",
                  borderBottomLeftRadius: "0px",
                  background: "white",
                }}
                className="input-group-text"
                id="addon-wrapping"
              >
                <MdOutlineLocationOn />
              </span>
              <input
                disabled={!locationEditEnabled}
                style={{
                  background: "white",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderColor: "#B8B8B8",
                  color: "black",
                }}
                type="text"
                className="form-control"
                placeholder="Enter your location"
                value={locationUpdate}
                onChange={(e) => {
                  setLocationUpdate(e.target.value);
                }}
                aria-describedby="addon-wrapping"
              />
              {locationEditEnabled ? (
                <>
                  <span
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderColor: "#B8B8B8",
                      borderBottomRightRadius: "0px",
                      background: "white",
                    }}
                    className="input-group-text"
                    id="addon-wrapping"
                    label="Enter location"
                  >
                    <button
                      onClick={() => setLocationEditEnabled(false)}
                      style={{ marginRight: "-15px" }}
                      type="button"
                      className="btn"
                    >
                      <MdOutlineClose />
                    </button>
                  </span>
                </>
              ) : (
                <>
                  <span
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderColor: "#B8B8B8",
                      borderBottomRightRadius: "0px",
                      background: "white",
                    }}
                    className="input-group-text"
                    id="addon-wrapping"
                  >
                    <button
                      onClick={() => setLocationEditEnabled(true)}
                      style={{ marginRight: "-15px" }}
                      type="button"
                      className="btn"
                    >
                      <MdModeEdit />
                    </button>
                  </span>
                </>
              )}
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <img
                style={{
                  color: "gray",
                  marginTop: "5px",
                  marginRight: "5px",
                  height: "13.3px",
                  width: "13.3px",
                }}
                alt="info"
                src={InfoIcon}
              />
              <p style={{ color: "gray", fontSize: "15px" }}>
                Your location will help us serve better and extend a personalised experience.
              </p>
            </div>
            {/* <div style={{ display: loggedIn && "none" }}> */}
              <br />
              <br />

              {/* Article-Right Groups  */}
              <h6>
                <img
                  style={{ marginTop: "-5px" }}
                  src={likeicon}
                  alt="likeIcon"
                />
                RECOMMENDED GROUPS
              </h6>
              {follow_groups.map((group) => (
                <>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ width: "40px", height: "40px" }}
                        src={group[0]}
                        alt="grp1"
                      />
                      &nbsp;&nbsp;
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          marginTop: "10px",
                        }}
                      >
                        {group[1]}
                      </h6>
                    </div>
                    <button
                      onClick={() => Update_followers(group[1])}
                      type="button"
                      style={{
                        backgroundColor: group[2] ? "black" : "#EDEEF0",
                        borderRadius: "21px",
                        color: group[2] ? "white" : "black",
                        width: group[2] ? "100px" : "85px",
                        height: "30px",
                        marginTop: "6px",
                        paddingTop: "2px",
                      }}
                      className="btn"
                    >
                      {group[2] ? "Followed" : "Follow"}
                    </button>
                  </div>
                </>
              ))}
              <br />
              <br />
              <p
                style={{
                  color: "#2F6CE5",
                  fontSize: "13px",
                  textAlign: "right",
                }}
              >
                See More...
              </p>
            {/* </div>  */}
          </div>
        )}
      </div>

      
      {/* <Signup /> */}

      {/* Float icon for Mobile View*/}
      {!breakpoints_desktop && (
        <p
          style={{ position: "fixed", right: "10px", bottom: "10px" }} onClick={() => navigate('/create-post') }
        >
          <img style={{ cursor: "pointer" }} alt="float" src={float} />
        </p>
      )}
    </>
  );
};

export default Article;
