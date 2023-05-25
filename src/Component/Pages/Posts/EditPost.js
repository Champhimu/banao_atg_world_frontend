import React, {useEffect, useState} from 'react'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';
import convertToBase64 from '../../helper/convert';

const EditPost = () => {
    const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [post, setPost] = useState({});
    const [inputs, setInputs] = useState({});

    const id = useParams().id;

    console.log(id);
    console.log(post?.user);
    const getPostDetail = async () => {
        try{
            // console.log("id"+id);
            const { data } = await axios.get(`/api/get-post/${id}`)
            if (data?.success) {
                setPost(data?.post);
                setInputs({
                    category: data?.post.category,
                    title: data?.post.title,
                    description: data?.post.description,
                    image: data?.post.image,
                })
            }
        } catch(error){
            console.log(error);
        }
    }

    const onUpload = async e => {
      const base64 = await convertToBase64(e.target.files[0]);
      // inputs(base64);
      setFile(base64);
      console.log(base64);
    }

    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const { data } = await axios.put(`/api/update-post/${id}`,{
          category: inputs.category,
          title: inputs.title,
          description: inputs.description,
          image: file || inputs.image,
          user: post?.user,
        })
        if(data?.success) {
          toast.success("Post Updated");
          navigate('/');
        }
      }catch(error){
        console.log(error);
      }
    }

    useEffect(() => {
        getPostDetail();
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    console.log(post);
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}></Toaster>

<div className="d-flex aligns-items-center justify-content-center card text-center w-60 position-absolute top-50 start-50 translate-middle"
    style={{
      width: breakpoints_desktop ? "50%" : "90%",
      marginTop: breakpoints_desktop ? "3%" : "20%",
    }}>
    

    <div className="card-body">
      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontWeight: "700" }}>Update a Post</h3>
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
            <form onSubmit={handleSubmit}>
            <img src={file || inputs.image} className="img-fluid w-100" style={{height:'220px'}} alt="cardimage"/>
            <input className="form-control" type="file" id="formFile" onChange={onUpload}
            style={{
                height: "39px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
            }}/>

            <input
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
            }}
            name="category" value= {inputs.category} onChange={handleChange}
            type="text" className="form-control" placeholder="Enter Category"  
            />
            {/* <p className="text-danger">{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p> */}

            <input
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
              }} 
              name="title" value={inputs.title} onChange={handleChange}
              type="text" className="form-control" placeholder="Enter Title" 

            />
            {/* <p className="text-danger">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p> */}

            <textarea
              style={{
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
              }}
              name="description" value= {inputs.description} onChange={handleChange}
              id='password' className="form-control" placeholder="Enter description" rows={3} 
            />
            {/* <p className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p> */}
            
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  height: "45px",
                  marginTop: "15px",
                  borderRadius: "25px",
                  width: breakpoints_desktop ? "100%" : "50%",
                  textAlign: 'center'
                }}
                type="submit" className="btn btn-primary">  Update Post
              </button>
            </div>
            </form>
            <br />
            <br />

          </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default EditPost
