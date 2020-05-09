import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { validateAll } from 'indicative/validator';
import { loginUserRequest, resetError } from '../../actions/userAuth.actions';


const Signin = ({ resetError, pending, error, signinRequest }) => {

    useEffect(() => {
        return () => resetError();
    }, [resetError])
    const [userInputs, setUserInputs] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = ({ target }) => {
        setUserInputs({ ...userInputs, [target.name]: target.value });
        setErrors({
            ...errors,
            [target.name]: ''
        })
    }

    const onSubmitSignIn = (event) => {
        event.preventDefault();
        const data = userInputs;
        const rules = {
            email: 'required|email',
            password: 'required|string'
        };
        const messages = {
            required: '{{field}} is required.',
            'email.email': 'This email is invalid'
        }

        validateAll(data, rules, messages)
            .then(() => {
                signinRequest(userInputs.email, userInputs.password);
            })
            .catch(err => {
                const formattedErrors = {}
                err.forEach(error =>
                    formattedErrors[error.field] = error.message)
                setErrors({ ...formattedErrors })
            })
    }

    return (
        <form onSubmit={onSubmitSignIn}
            className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-3 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <span className='red b '>{error}</span>
                        <div className="mt3">
                            <div>
                                <label className="db fw6 lh-copy f4 mb0 pa0" htmlFor="email-address">Email</label>
                                <span className='red f6'>{errors.email}</span>
                            </div>
                            <input
                                onChange={handleInputChange} className="pa2 input-reset ba bg-transparent w-100" type="email" name="email" id="email-address" />
                        </div>
                        <div className="mv3">
                            <div>
                                <label className="db fw6 lh-copy f4 mb0 pa0" htmlFor="password">Password</label>
                                <span className='red f6 '>{errors.password}</span>
                            </div>
                            <input
                                onChange={handleInputChange} className="pa2 input-reset ba bg-transparent w-100" type="password"
                                name="password" id="password" />
                        </div>

                    </fieldset>
                    <div className="mv3">
                        <button
                            onClick={onSubmitSignIn}
                            className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5" type="submit">
                            {pending ? <div className="loader"></div> :
                                <span>Sign in</span>}
                        </button>
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='/register'>
                            <p className="f5 link dim black db pointer" >Register</p>
                        </Link>
                    </div>
                </div>
            </main>
        </form>
    )
}

const mapStateToProps = ({ login: { isPending, error } }) => ({
    pending: isPending,
    error: error
});

const mapDispatchToProps = dispatch => ({
    signinRequest: (email, password) =>
        dispatch(loginUserRequest({ email, password })),
    resetError: () => dispatch(resetError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);