import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './icon3.png'
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt shadow-2" options={{ max: 60 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img style={{ paddingTop: '5px' }} src={logo} alt='logo' /> </div>
            </Tilt>
        </div>
    )

}


export default Logo;