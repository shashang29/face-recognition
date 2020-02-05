import React from 'react'


class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signedInEmail: '',
            signedInPassword: '',
            pending: false
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

    onSubmitSignIn = () => {
        this.setState({
            pending: true
        })
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
                if (responsedata.id) {
                    this.setState({
                        pending: false
                    })
                    this.props.loadUser(responsedata);
                    this.props.onRouteChange('home');
                }
                else {
                    alert(responsedata);
                }
            })
    }


    render() {

        const { onRouteChange } = this.props;
        return (
            <article
                onKeyPress={this.handleKeyPress}
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
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
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
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