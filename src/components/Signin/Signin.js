import React, { useState } from 'react'
import { connect } from 'react-redux';
import { validateAll } from 'indicative/validator';
import { setPending } from '../../actions/actions'
import { loginUserAction } from '../../actions/user.actions';

const Signin = props => {

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
                props.dispatch(loginUserAction(userInputs.email, userInputs.password));
                props.dispatch(setPending(true))
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
                        <span className='red b '>{props.login.error}</span>
                        <div className="mt3">
                            <div>
                                <label className="db fw6 lh-copy f4 mb0 pa0" htmlFor="email-address">Email</label>
                                <span className='red f6'>{errors.email}</span>
                            </div>
                            <input
                                onChange={handleInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email-address" />
                        </div>
                        <div className="mv3">
                            <div>
                                <label className="db fw6 lh-copy f4 mb0 pa0" htmlFor="password">Password</label>
                                <span className='red f6 '>{errors.password}</span>
                            </div>
                            <input
                                onChange={handleInputChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"
                                name="password" id="password" />
                        </div>

                    </fieldset>
                    <div className="mv3">
                        <button
                            onClick={onSubmitSignIn}
                            className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5" type="submit">
                            {props.isPending.pending ? <div className="loader"></div> :
                                <span>Sign in</span>}
                        </button>
                    </div>
                    <div className="lh-copy mt3">
                        <p
                            onClick={() => props.onRouteChange('register')}
                            className="f5 link dim black db pointer" >Register</p>

                    </div>
                </div>
            </main>
        </form>
    )

}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Signin);