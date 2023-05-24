import { useFormik } from 'formik';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';
import convertToBase64 from '../../helper/convert';
import { updatePost } from '../../helper/helper';

const EditPost = () => {
    const breakpoints_desktop = useMediaQuery({ query: "(min-width: 790px)" });
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [post, setPost] = useState({});
    const [inputs, setInputs] = useState({});

    const id = useParams().id;

    console.log(id);
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

    const formik = useFormik({
        initialValues : {
          title: "inputs.title",
          description: "inputs.description",
          category: "inputs.category",
          user: id,
        },
          validateOnBlur: false,
          validateOnChange: false,
          onSubmit: async values => {
            console.log("clicked");
            values = await Object.assign(values, {image : file || ''}, id)
            console.log(values);
  
            let updatePostPromise = updatePost(values)
  
            toast.promise(updatePostPromise, {
              loading: 'Creating...',
              success: <b>Post Updated Successfully..!</b>,
              error: <b>Could not update Post.</b>
            })
    
            updatePostPromise.then(function() {navigate('/')});
          }
      })

      const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
        console.log(base64);
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
            <form onSubmit={formik.handleSubmit}>
            <img src={file || inputs.image} height="20%" className='card-img-top' alt="cardimage"/>
            <input className="form-control" type="file" id="formFile" onChange={onUpload}
            style={{
                height: "39px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
            }}/>

            <input
            {...formik.getFieldProps('category')}
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
            }}
            value= {inputs.category}
            id='username' type="text" className="form-control" placeholder="Enter Category"  
            />
            {/* <p className="text-danger">{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</p> */}

            <input
            {...formik.getFieldProps('title')}
              style={{
                height: "45px",
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
              }} 
              value={inputs.title}
              id='title' type="text" className="form-control" placeholder="Enter Title" 

            />
            {/* <p className="text-danger">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p> */}

            <textarea
              style={{
                borderRadius: "0px",
                backgroundColor: "#F7F8FA",
                marginBottom: "10px",
              }}
              value= {inputs.description}
              id='password' className="form-control" placeholder="Enter description" rows={3} name="description"
            />
            {/* <p className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p> */}
            
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  height: "45px",
                  marginTop: "15px",
                  borderRadius: "25px",
                  width: breakpoints_desktop ? "100%" : "50%",
                }}
                type="submit" className="btn btn-primary">  Update Post
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

          </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default EditPost
