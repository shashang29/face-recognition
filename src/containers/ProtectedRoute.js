import React from 'react';
import {connect} from 'react-redux';

import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={props =>
                window.sessionStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps=(state)=>({
    ...state
  })
  
  export default connect(mapStateToProps)(ProtectedRoute);