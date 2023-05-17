import React,{useState} from 'react'
import GroupIcon from '../../../Asset/images/Vector.png'
import Card from './Card'
import InfoIcon from '../../../Asset/images/Vector (3).png'

import {MdOutlineLocationOn, MdModeEdit, MdOutlineClose} from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'
import Login from '../Signup/Login'
import Signup from '../Signup/Signup'

const Article = () => {

    const [location_edit_enabled, setLocation_edit_enabled] = useState(false);
    const [location_update, setLocation_update] = useState('Noida, India');

  return (
    <>
    {/* Article Nav */}
    <div style={{marginTop: '20px', marginLeft: '15%', marginRight: '15%'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}} class="nav">
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <a style={{color: 'black'}}class="nav-link active" aria-current="page" href="#">All Posts(32)</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Article</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Event</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Education</a>
            <a style={{color: '#8A8A8A'}} class="nav-link" href="#">Job</a>
            </div><div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{marginRight: '3%', width: '133px'}} class="btn-group">
                <button class="btn btn-sm" style={{backgroundColor: '#EDEEF0'}} type="button">
                    Write a Post
                </button>
                <button type="button" style={{borderColor: '#EDEEF0', backgroundColor: '#EDEEF0'}} class="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split">
                </button>
                </div>
                <button style={{width: '134px'}} data-bs-toggle="modal" data-bs-target="#createaccountmodal" class="btn btn-sm btn-primary" type="button">
                    <span><img src={GroupIcon} alt='Add Group icon'/></span> &nbsp; Join Group
                </button>
                </div>
                </nav>
    </div>

    {/* Divider */}
    <hr style={{width: '70%' , margin: 'auto', marginTop: '12px'}} />

    {/* Article-Left */}
    &nbsp;
    <div style={{marginLeft: '15%', display: 'flex', justifyContent: 'space-between'}}>
    <Card />

    {/* Article-Right */}
    {/* &nbsp; */}
    <div style={{marginRight: '17.5%', width: '243px', marginTop: '12px'}}>
    <div class="input-group flex-nowrap">
            <span style={{paddingLeft: '0px', paddingRight: '1px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', borderBottomLeftRadius: '0px', background: 'white'}} class="input-group-text" id="addon-wrapping"><MdOutlineLocationOn /></span>
            <input disabled={!location_edit_enabled} style={{background: 'white', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', color: 'black'}} type="text" class="form-control" placeholder="Enter your location" value={location_update} onChange={(e) => {setLocation_update(e.target.value)}} aria-describedby="addon-wrapping" />
                    {location_edit_enabled ? <>
                    <span style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', borderBottomRightRadius: '0px', background: 'white'}} class="input-group-text" id="addon-wrapping">
                    <button onClick={() => setLocation_edit_enabled(false)} style={{marginRight: '-15px'}} type="button" class="btn">
                    {/* <img style={{margin: 'none'}} alt='location' src={closeicon}/> */}
                    <MdOutlineClose />
                    </button></span>
                    </> : <>
                    <span style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderColor: '#B8B8B8', borderBottomRightRadius: '0px', background: 'white'}} class="input-group-text" id="addon-wrapping">
                    <button onClick={() => setLocation_edit_enabled(true)} style={{marginRight: '-15px'}} type="button" class="btn">
                    {/* <img style={{margin: 'none'}} alt='location' src={editicon}/> */}
                    <MdModeEdit />
                    </button></span>
                    </>}
                </div>
                <br /> 
                <div  style={{display: 'flex'}}>
                    {/* <BiInfoCircle className='Info_Icon' style={{color: 'gray', height: '25px', width: '15px'}}/> */}
                    <img style={{color: 'gray', marginTop: '5px', marginRight: '5px', height: '13.3px', width:'13.3px'}} alt='info' src={InfoIcon} />
                    <p style={{color: 'gray', fontSize: '15px'}}>Your location will help us serve better and extend a personalised experience.</p>
                </div>
    </div>
    </div>

    {/* <Login /> */}
    <Signup />
    </>
  )
}

export default Article
