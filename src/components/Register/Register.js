import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { registerUserAction, registerReset } from '../../actions/userAuth.actions';
import { validateAll } from 'indicative/validator';



const Register = ({ registered, error, registerUserAction, registerReset, pending }) => {

    const [userInputs, setUserInputs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });



    const onInputChange = ({ target }) => {
        setUserInputs({
            ...userInputs,
            [target.name]: target.value
        })
        setErrors({
            ...errors,
            [target.name]: ''
        })
    }

    const onSubmitRegister = (event) => {
        event.preventDefault();
        const data = userInputs;
        const rules = {
            first_name: 'required',
            last_name: 'required',
            email: 'required|email',
            password: 'required|string'
        };
        const messages = {
            required: 'Required',
            'email.email': 'This email is invalid'
        }

        validateAll(data, rules, messages)
            .then(() => {
                registerUserAction({ ...userInputs })
            })
            .catch(err => {
                const formattedErrors = {}
                err.forEach(error =>
                    formattedErrors[error.field] = error.message)
                setErrors({ ...formattedErrors })

            })
    }


    if (registered === true) {
        return (
            <div className="b--transparent w-80 w-50-m w-25-s mw6 shadow-3 center h-50">
                <main className="pa4 black-80">
                    <div className="measure">
                        <h1>Registration was successful</h1>
                        <Link to="/">
                            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={() => registerReset()} >Sign In</button>
                        </Link>
                    </div>
                </main>
            </div>
        )
    }
    else {
        return (
            <form onSubmit={onSubmitRegister}
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-s mw6 shadow-3 center">

                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <span className='red b '>{error}</span>
                            <div className=" pl2 pr2 mt3">
                                <div>
                                    <label className="db fw6 lh-copy f4 mb0 pa0" htmlFor="firstname">First Name</label>
                                    <span className='red f6 '>{errors.first_name}</span>
                                </div>
                                <input
                                    onChange={onInputChange}
                                    className="pa2 input-reset ba bg-transparent w-100" type="text" name="first_name" id="firstname" />
                            </div>
                            <div className="pl2 pr2 mt3">
                                <div>
                                    <label className="db fw6 lh-copy f4 mb0" htmlFor="lastname">Last Name</label>
                                    <span className='f6 red'>{errors.last_name}</span>
                                </div>
                                <input
                                    onChange={onInputChange}
                                    className="pa2 input-reset ba bg-transparent w-100" type="text" name="last_name" id="lastname" />
                            </div>
                            <div className="pl2 pr2 mt3">
                                <div>
                                    <label className="db fw6 lh-copy f4 mb0" htmlFor="email-address">Email</label>
                                    <span className='f6 red'>{errors.email}</span>
                                </div>
                                <input
                                    onChange={onInputChange}
                                    className="pa2 input-reset ba bg-transparent w-100" type="email" name="email" id="email-address" />
                            </div>
                            <div className=" pl2 pr2 mv3">
                                <div>
                                    <label className="db fw6 lh-copy f4 mb0" htmlFor="password">Password</label>
                                    <span className='f6 red'>{errors.password}</span>
                                </div>
                                <input
                                    onChange={onInputChange}
                                    className="b pa2 input-reset ba bg-transparent w-100" type="password"
                                    name="password" id="password" />
                            </div>

                        </fieldset>
                        <div>
                            <button
                                onClick={onSubmitRegister}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" >
                                {pending ? <div className="loader"></div> :
                                    <span>Register</span>}
                            </button>
                        </div>

                    </div>
                </main>
            </form>
        )
    }
}


const mapStateToProps = ({ register: { registered, error, isPending } }) => ({
    registered: registered,
    error: error,
    pending: isPending
});

const mapDispatchToProps = dispatch => ({
    registerUserAction: (userInputs) => dispatch(registerUserAction(userInputs)),
    registerReset: () => dispatch(registerReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);