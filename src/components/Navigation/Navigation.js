import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import ProfileIcon from '../Profile/Profileicon'

const Navigation = ({ isSignedIn, toggleModal }) => {
    const token = window.sessionStorage.getItem('token');
    if (token && isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <div>
                    <ProfileIcon toggleModal={toggleModal} />
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
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <p className='f4 link dim black ma3 mr1 pa2 pointer shadow-5'>Sign In</p>
                            </Link>
                        </div>


                        <div>
                            <Link to='/register' style={{ textDecoration: 'none' }}>
                                <p
                                    className='f4 link dim black ma3 ml0 pa2 pointer shadow-5'>Register</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>


        )
    }

}

const mapStateToProps = ({ login: { isSignedIn } }) => ({
    isSignedIn
})
export default connect(mapStateToProps)(Navigation)