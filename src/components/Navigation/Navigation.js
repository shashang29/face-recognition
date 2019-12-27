import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {

    if(isSignedIn){
return(
        <nav style={{float:'right'}}>
            <p
                onClick={() => onRouteChange('signout')}
                className='f4 link dim black ma3 pa2 pointer shadow-5'>Sign Out</p>
        </nav>
)
    }
        else{
            return(
        <nav >
            <p style={{float:'right'}} onClick={() => onRouteChange('signin')}
                className='f4 link dim black ma3 pa2 pointer shadow-5'>Sign In</p>
            <p style={{float:'right'}} onClick={() => onRouteChange('register')}
                className='f4 link dim black ma3 ml0 pa2 pointer shadow-5'>Register</p>
        </nav>
        )}

    }


export default Navigation