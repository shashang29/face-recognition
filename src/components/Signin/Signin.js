import React from 'react'


class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signedInEmail: '',
            signedInPassword: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({
            signedInEmail: event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            signedInPassword: event.target.value
        })
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmitSignIn();
        }
    }
    emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

    onSubmitSignIn = () => {
        const { onPending, loadUser, onRouteChange } = this.props;
        
        if (!this.emailIsValid(this.state.signedInEmail) || this.state.signedInPassword === '') { 
            document.input.focus()
        alert('Invalid email or password')
        } 
        else {
            onPending(true);
            fetch('https://thawing-fjord-68352.herokuapp.com/signin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.signedInEmail,
                    password: this.state.signedInPassword
                })
            })
                .then(response => response.json())
                .then(responsedata => {
                    onPending(false);
                    if (responsedata.id) {

                        loadUser(responsedata);
                        onRouteChange('home');
                    }
                    else {
                        alert(responsedata);
                    }

                })
        }
    }


    render() {

        const { onRouteChange, pending } = this.props;
        return (
            <article
                onKeyPress={this.handleKeyPress}
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-3 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"
                                    name="password" id="password" />
                            </div>

                        </fieldset>
                        <div className="mv3">
                            <button
                                onClick={this.onSubmitSignIn}
                                className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5" type="submit">
                                {pending && <div class="loader"></div>}
                                {!pending && <span>Sign in</span>}
                            </button>
                        </div>
                        <div className="lh-copy mt3">
                            <p
                                onClick={() => onRouteChange('register')}
                                className="f5 link dim black db pointer" >Register</p>

                        </div>
                    </div>
                </main>
            </article>
        )
    }


}


export default Signin;