import React, { useContext } from 'react'
import bannerimg from '../../../Asset/images/Rectangle 2.png'
import { useMediaQuery } from 'react-responsive'
import { MyContext } from '../../../App'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Banner = () => {
    const breakpoints_desktop = useMediaQuery({query: '(min-width: 790px)'})
    const breakpoints_mobile = useMediaQuery ({query: '(min-width: 400px'})

    const {isSignedIn, setIsSignedIn} = useContext(MyContext);

  return (
    <div style={{backgroundColor: 'black'}}>

        {/* Banner image */}
        <img src={bannerimg} alt='banner' 
        style={{
            width: '100%',
            height: (breakpoints_desktop ? '440px' : (breakpoints_mobile ? '300px' : '200px')),
            opacity: '0.5',
            marginTop: (breakpoints_desktop ? '72px': '')
        }}
        />

        {/* Text Header */}
        <h2
        style={{
            position: 'absolute',
            marginTop: (breakpoints_desktop? '-160px': (breakpoints_mobile ? '-90px': '-80px')),
            marginLeft: (breakpoints_desktop ? '15%': (breakpoints_mobile ? '5%' : '2%')),
            color: 'white',
            fontWeight: '700',
            fontSize: (breakpoints_desktop ? '' : '20px')
        }}>
            Computer Engineering
        </h2>

        {/* Text Paragraph */}
        <p
        style={{
            position: 'absolute',
            color: 'white',
            marginTop: (breakpoints_desktop ? '-120px' : (breakpoints_mobile ? '-55px': '-50px')),
            marginLeft: (breakpoints_desktop ? '15%': (breakpoints_mobile ? '5%' : '2%')),
            fontSize: (breakpoints_desktop ? '' : '15px')
        }}>
            142,765 Computer Engineers follow this
        </p>

        {!breakpoints_desktop && <>
            <p><AiOutlineArrowLeft style={{cursor: 'pointer', position: 'absolute', marginTop: (breakpoints_desktop ? '-275px' : (breakpoints_mobile ? '-280px' : '-180px')), marginLeft: '3.75%', color: 'white', fontSize: '1.2em'}}/></p>
            {isSignedIn ? <button onClick={() => setIsSignedIn(false)} style={{position: 'absolute', borderColor: 'white', color: 'white', borderRadius: '4px', marginTop: (breakpoints_mobile ? '-298px' : '-205px'), right: '0', marginRight: '3.75%'}} class="btn btn-sm" type="button">Leave Group</button>:
            <button style={{position: 'absolute', borderColor: 'white', color: 'white', borderRadius: '4px', marginTop: (breakpoints_mobile ? '-298px' : '-205px'), right: '0', marginRight: '3.75%'}}  data-bs-toggle="offcanvas" data-bs-target="#createaccountcanvas" aria-controls="offcanvasBottom" class="btn btn-sm" type="button">Join Group</button>}</>}

    </div>
  )
}

export default Banner
