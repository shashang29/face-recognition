import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './icon3.png'
const Logo = () => {
    return (
        <div className='ml4 mt3 mb3'>
            <Tilt className="Tilt shadow-2" options={{ max: 60 }} style={{ maxWidth: '150px', maxHeight:'150px' }} >
                <div className="Tilt-inner pa3"> <img style={{ maxWidth: '100%', maxHeight:'100%' }} src={logo} alt='logo' /> </div>
            </Tilt>
        </div>
    )

}


export default Logo;