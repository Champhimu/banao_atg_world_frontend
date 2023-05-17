import React from 'react'
import card1 from '../../../Asset/images/Rectangle 5.png'
import card2 from '../../../Asset/images/Rectangle 5 (1).png'
import card3 from '../../../Asset/images/Rectangle 5 (2).png'
import menuicon from '../../../Asset/images/Vector (2).png'
import User1 from '../../../Asset/images/Rectangle 3 (1).png'
import User4 from '../../../Asset/images/Rectangle 3 (2).png'
import User2 from '../../../Asset/images/Rectangle 3 (3).png'
import User3 from '../../../Asset/images/Rectangle 3 (4).png'

import {BsFillShareFill} from 'react-icons/bs'
import {RiCalendarEventFill} from 'react-icons/ri'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BsBag} from 'react-icons/bs'

const Card = () => {
  return (
    <div>
      {/* <div style={{marginLeft: '15%', display: 'flex', justifyContent: 'space-between'}}> */}
        <div style={{width: '70%', height: '83vh', overflowY: 'scroll'}}>

            {/* Card 1 */}
            <div className='card' style={{width:'100%'}}>
                <img src={card1} className='card-img-top' alt="Card 1 Image" />
                <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#9997; Article</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={menuicon} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div>
                </div> 
                <h6 style={{marginBottom: '30px', color: '#5C5C5C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to reidf bsgakksa shly akssdjj shadkj</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={User1} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Sarah West</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>4.8k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    {/* <img alt='share' src={shareicon} /> */}
                    <BsFillShareFill />
                    </button>
                </div>
                </div>
            </div>
            </div>

            <br />
            {/* Card 2 */}
            <div className='card' style={{width:'100%'}}>
                <img src={card2} className='card-img-top' alt="Card 1 Image" />
                <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#128300; Education</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={menuicon} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div>
                </div> 
                <h6 style={{marginBottom: '30px', color: '#5C5C5C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to reidf bsgakksa shly akssdjj shadkj</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={User2} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Sarthak Kamra</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    {/* <img alt='share' src={shareicon} /> */}
                    <BsFillShareFill />
                    </button>
                </div>
                </div>
            </div>
            </div>
            <br />

            {/* Card 3 */}
            <div class="card" style={{width: '100%'}}>
            <img src={card3} class="card-img-top" alt="Third Pic" />
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#128197; Meetup</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">Finance & Investment Elite Social Mixer @Lujiazui</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={menuicon} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div></div>
                <div style={{display: 'flex'}}>
                <RiCalendarEventFill  style={{ marginTop: '3px', width: '15px', height:'15px0'}}/> &nbsp; <p style={{fontSize: '14px', color: 'black'}}>Fri, 12 Oct, 2018</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MdOutlineLocationOn  style={{ marginTop: '2px', width: '20px', height:'15px0' }}/> &nbsp; <p style={{fontSize: '14px', color: 'black'}}>Ahmedabad, India</p>
                    {/* <img alt='views' style={{marginTop: '2px', width: '15px', height: '15px'}} src={calendericon} />&nbsp;<p style={{fontSize: '14px', color: 'black'}}>Fri, 12 Oct, 2018</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    {/* <img alt='views' style={{marginTop: '2px', width: '10px', height: '15px'}} src={locationicon} />&nbsp;<p style={{fontSize: '14px', color: 'black'}}>Ahmedabad, India</p> */}
                </div>
                <button style={{borderRadius: '8px', color: '#E56135', borderColor: '#A9AEB8'}} type="button" class="btn w-100">Visit Website</button>
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={User3} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Ronal Jones</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    {/* <img alt='share' src={shareicon} /> */}
                    <BsFillShareFill />
                    </button>
                </div>
                </div>
            </div>
            </div>
            <br />

            {/* Card4 */}
            <div class="card" style={{width: '100%'}}>
            <div class="card-body">
                <h6 style={{fontWeight: '540'}} class="card-title">&#128188; Job</h6>
                <div style={{display: 'flex', justifyContent: 'space-between'}}><p style={{fontWeight: '700', width:'90%'}} class="card-text">Software Developer</p>
                <div class="btn-group">
                <button style={{height: '25px', width: '25px'}} type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img style={{marginTop: '-16px', marginLeft: '-8px'}} alt='...' src={menuicon} />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item" type="button">Report</button></li>
                    <li><button class="dropdown-item" type="button">Option 3</button></li>
                </ul>
                </div></div>
                <div style={{display: 'flex'}}>
                    <BsBag style={{marginTop: '4px', width: '15px', height: '15px'}}/>&nbsp;<p style={{fontSize: '14px', color: 'black', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Innovaccer Analytics Private Ltd.</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <MdOutlineLocationOn style={{marginTop: '4px', width: '15px', height: '15px'}}/> &nbsp;<p style={{fontSize: '14px', color: 'black'}}>Noida, India</p>
                    {/* <img alt='views' style={{marginTop: '2px', width: '15px', height: '15px'}} src={jobicon} />&nbsp;<p style={{fontSize: '14px', color: 'black', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Innovaccer Analytics Private Ltd.</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    {/* <img alt='views' style={{marginTop: '2px', width: '10px', height: '15px'}} src={locationicon} />&nbsp;<p style={{fontSize: '14px', color: 'black'}}>Noida, India</p> */}
                </div>
                <button style={{borderRadius: '8px', color: '#02B875', borderColor: '#A9AEB8'}} type="button" class="btn w-100">Apply on Timesjobs</button>
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <img style={{width: '40px', height: '40px'}} src={User4} alt='user1' />&nbsp;&nbsp;<h6 style={{fontSize: '15px', fontWeight: '700', marginTop: '10px'}}>Joseph Gray</h6>
                </div>
                <div style={{display: 'flex'}}>
                    <img alt='views' style={{width: '18px', height: '18px', marginTop: '10px'}} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png"/>&nbsp;<p style={{fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px'}}>1.4k views</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn" style={{backgroundColor: '#EDEEF0'}} type="button">
                    {/* <img alt='share' src={shareicon} /> */}
                    <BsFillShareFill />
                    </button>
                </div>
                </div>
            </div>
            </div>
            
            <br />
            <br />
            <br />

        </div>
        </div>
    // </div>
  )
}

export default Card
