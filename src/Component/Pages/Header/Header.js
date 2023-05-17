import React from 'react'
import Logo from '../../../Asset/images/Union 1.png'
import './Header.css'
import {FiSearch} from 'react-icons/fi'
import Login from '../Signup/Login'

const Header = () => {

    // const breakpoints_desktop = useMediaQuery({});

  return (
    <div className="topbar">

        {/* Logo ATG WORLD */}
        <h5 className='logo'>
            <span style={{color: '#27A365'}}>ATG.</span>W
            <span>
                <img style={{marginBottom: '5px'}} src={Logo} alt='logo'/>
            </span>RLD
        </h5>

        {/* Search Bar */}
        <div style={{width: '360px', paddingTop: '15px', paddingBottom: '15px'}} class="input-group flex-nowrap">
            <span style={{borderBottomLeftRadius: '21px', borderTopLeftRadius: '21px', backgroundColor: '#F2F2F2', border: 'none'}} class="input-group-text" id="addon-wrapping">
                {/* <img alt='search' src={searchicon}/> */}
                {/* <BiSearchAlt2 /> */}
                <FiSearch/>
            </span>
            <input style={{fontSize: '13px', borderTopRightRadius: '21px', borderBottomRightRadius: '21px', backgroundColor: '#F2F2F2', border: 'none'}} type="text" class="form-control" placeholder="Search for your favourite groups in ATG" aria-describedby="addon-wrapping" />
        </div>

        {/* Registration */}
        <div style={{marginRight: '3%', width: '200px', paddingTop: '15px', paddingBottom: '15px'}} class="btn-group">
        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-sm" type="button" style={{textAlign: 'right'}}>
            Create account.
            <span style={{color: 'blue'}}> It's free!</span>
        </button>
        <button disabled type="button" class="btn btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        </div>
        
        {/* Modal Signup */}
        {/* <Login /> */}
    </div>
  )
}

export default Header
