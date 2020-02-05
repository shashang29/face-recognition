import React from 'react'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    onFirstNameChange = (event) => {
        this.setState({
            first_name: event.target.value
        })
    }

    onLastNameChange = (event) => {
        this.setState({
            last_name: event.target.value
        })
    }
    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmitRegister();
        }
    }
    emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

    onSubmitRegister = () => {
        const { onPending, onRouteChange, loadUser } = this.props;
        if (!this.emailIsValid(this.state.email) ) { 
            alert('Type a valid email id')
            } 
            else{
        onPending(true);
        fetch('https://thawing-fjord-68352.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password

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

        return (
            <article
                onKeyPress={this.handleKeyPress}
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-s mw6 shadow-3 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className=" pl2 pr2 mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="firstname">First Name</label>
                                <input
                                    onChange={this.onFirstNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstname" id="firstname" />
                            </div>
                            <div className="pl2 pr2 mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name</label>
                                <input
                                    onChange={this.onLastNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastname" id="lastname" />
                            </div>
                            <div className="pl2 pr2 mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className=" pl2 pr2 mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>

                        </fieldset>
                        <div className="">
                            <button
                                onClick={this.onSubmitRegister}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" >

                                {this.props.pending && <div className="loader"></div>}
                                {!this.props.pending && <span>Register</span>}
                            </button>
                        </div>

                    </div>
                </main>
            </article>
        )
    }
}


export default Register;