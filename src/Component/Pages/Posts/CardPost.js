import React, {useEffect, useState} from 'react'
import menuicon from "../../../Asset/images/Vector (2).png";
import avatar from "../../../Asset/images/profile.png";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import {AiOutlineEye, AiOutlineHeart, AiTwotoneHeart} from 'react-icons/ai';
import { BsFillShareFill } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const CardPost = () => {

    const [posts, setPosts] = useState([]);
    const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });
    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    const getAllPosts = async () => {
        try{
            const {data} = await axios.get("/api/getAllPosts");
            if (data?.success) {
                setPosts(data?.posts);
            }
        }catch(error){
            console.log(error);
        }
    }

    // console.log(posts);
    useEffect(() => {
        getAllPosts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleDelete = async (postid) => {
        // console.log("PostId: "+ postid);
        try{
            const { data } = await axios.delete(`/api/delete-post/${postid}`);
            if(data?.success){
                toast("Post Deleted");
                window.location.reload();
            }
        }catch(error){
            console.log(error);
        }
    }

    const handleEdit = (postid) => {
        navigate(`/postEdit/${postid}`)
    }

    console.log(posts);
  return (
    <div>
    <Toaster position='top-center' reverseOrder={false}></Toaster>

      {/* Card */}
      {posts && posts.length > 0 ? (
      posts.map((post) => (
        <>
        <div
        key={post?._id}
        className="card"
        style={{
          width: "100%",
          boxShadow: breakpoints_desktop ? "" : "0px 1px 2px rgba(0, 0, 0, 0.12)",
          border: breakpoints_desktop ? "" : "none",
        }}>
        <img src={post?.image} className="img-fluid w-100" style={{height:'220px'}} alt="Card 1" />
        <div className="card-body">
          <h6 style={{ fontWeight: "540" }} className="card-title"> &#9997; {post?.category} </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "700", width: "90%" }} className="card-text">
              {post?.title}
            </p>
            <div className="btn-group">
              <button
                style={{ height: "25px", width: "25px" }}
                type="button"
                className="btn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ marginTop: "-16px", marginLeft: "-8px" }}
                  alt="..."
                  src={menuicon}
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    {/* {console.log(post?.user_id !== id)}
                    {console.log(post?.user._id,id)} */}
                  <button className="dropdown-item" type="button" disabled = {post?.user._id !== id} onClick={() => handleEdit(post?._id)} >
                    Edit
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button" disabled = {post?.user._id !== id} onClick={() => handleDelete(post?._id)}>
                    Delete
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Comment
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <h6
            style={{
              marginBottom: "30px",
              color: "#5C5C5C",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {post?.description}
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>

            {/* Card 1 Profile Desktop View */}
            {breakpoints_desktop ? (
              <>
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={post?.user.profile || avatar}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <h6
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginTop: "10px",
                    }}
                  >
                    {post?.user.username}
                  </h6>
                </div>
                <div onClick={() => setLike(true)} style={{fontSize: '1.5em', color: 'red'}}>{like ? <AiTwotoneHeart /> : <AiOutlineHeart />}</div>
                <div style={{ display: "flex" }}>
                  <AiOutlineEye
                    style={{ width: "18px", height: "18px", marginTop: "10px" }}
                  />
                  &nbsp;
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#525252",
                      marginTop: "7.5px",
                      marginBottom: "0px",
                    }}
                  >
                    4.8k views
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill />
                  </button>
                </div>
              </>
            ) : (
              <>
              {/* Card 1 Profile Mobile View */}
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={post?.user.profile || avatar}
                    alt="user1"
                  />
                  &nbsp;&nbsp;
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h6 style={{ fontSize: "15px", fontWeight: "700" }}>
                        {post?.user.username}
                    </h6>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#525252",
                        marginTop: "-8px",
                        marginBottom: "0px",
                      }}
                    >
                      1.4k views
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#EDEEF0" }}
                    type="button"
                  >
                    <BsFillShareFill /> &nbsp; Share
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
        </>
      )) 
      ) : (
        <h1 className='text-center mt-5'>No Post Yet </h1>
      )
    }
    </div>
  )
}

export default CardPost
