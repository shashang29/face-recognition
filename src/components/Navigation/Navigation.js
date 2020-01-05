import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <div>
                <p
                    onClick={() => onRouteChange('signout')}
                    className='f4 link dim black ma3 pa2 pointer shadow-5'>Sign Out</p>
                    </div>
            </nav>
        )
    }
    else {
        return (
            <nav >

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Logo />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div>
                            <p onClick={() => onRouteChange('signin')}
                                className='f4 link dim black ma3 mr1 pa2 pointer shadow-5'>Sign In</p>
                        </div>
                        <div>
                            <p onClick={() => onRouteChange('register')}
                                className='f4 link dim black ma3 ml0 pa2 pointer shadow-5'>Register</p>
                        </div>
                    </div>
                </div>

            </nav>


        )
    }

}


export default Navigation