import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            age: this.props.user.age
        }
    }
    onFormChange = (event) => {
        switch (event.target.name) {
            case 'firstname':
                this.setState({ first_name: event.target.value })
                break;
            case 'lastname':
                this.setState({ last_name: event.target.value })
                break;
            case 'age':
                this.setState({ age: event.target.value })
                break;
            default:
                return;
        }
    }
    onProfileUpdate = (data) => {
        fetch(`http://localhost:3005/profile/${this.props.user.id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formInput: data
            })
        }).then(res => {
            this.props.toggleModal();
            this.props.loadUser({ ...this.props.user }, ...data)
        }).catch(console.log)
    }

    render() {
        const { user } = this.props;
        const { first_name, last_name, age } = this.state;
        return (
            <div className="profile-modal">
                <article
                    className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-s mw6 shadow-3 center bg-white">
                    <main className="pa4 black-80 w-80">
                        <img
                            src="http://tachyons.io/img/logo.jpg"
                            className="h3 w3 dib" alt="avatar" />
                        <h1>{`${this.state.first_name} ${this.state.last_name}`}</h1>
                        <h4>{`Images Submitted: ${user.entries}`}</h4>
                        <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                        <hr />
                        <label className="mt2 fw6" htmlFor="user-first-name">First Name:</label>
                        <input onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.first_name}
                            type="text" name="firstname" id="firstname" />
                        <label className="mt2 fw6" htmlFor="user-last-name">Last Name:</label>
                        <input onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.last_name} type="text" name="lastname" id="lastname" />
                        <label className="mt2 fw6" htmlFor="user-age">Age:</label>
                        <input onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.age} type="text" name="age" id="age" />
                        <div className="mt4" style={{ display: "flex", justifyContent: 'space-evenly' }}>
                            <button
                                onClick={() => this.onProfileUpdate({ first_name, last_name, age })}
                                className="b pa2 grow hover-bg-blue w-40 b--blue b--black-20">Save</button>
                            <button className="b pa2 grow hover-bg-light-red w-40 b--light-red b--black-20"
                                onClick={this.props.toggleModal}
                            >Cancel</button>
                        </div>
                    </main>
                    <div className="modal-close" onClick={this.props.toggleModal}>&times;</div>
                </article>
            </div>)
    }
}


export default Profile;