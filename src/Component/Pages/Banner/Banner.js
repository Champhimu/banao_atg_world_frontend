import React from 'react'
import bannerimg from '../../../Asset/images/Rectangle 2.png'

const Banner = () => {
  return (
    <div style={{backgroundColor: 'black'}}>

        {/* Banner image */}
        <img src={bannerimg} alt='banner' 
        style={{
            width: '100%',
            height: '440px',
            opacity: '0.5',
            marginTop: '72px'
        }}
        />

        {/* Text Header */}
        <h2
        style={{
            position: 'absolute',
            marginTop: '-160px',
            marginLeft: '15%',
            color: 'white',
            fontWeight: '700'
        }}>
            Computer Engineering
        </h2>

        {/* Text Paragraph */}
        <p
        style={{
            position: 'absolute',
            color: 'white',
            marginTop: '-120px',
            marginLeft: '15%'
        }}>
            142,765 Computer Engineers follow this
        </p>
    </div>
  )
}

export default Banner
