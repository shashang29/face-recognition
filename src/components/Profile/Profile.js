import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleModal, submitProfileUpdate } from '../../actions/user.actions';

import './Profile.css';

const Profile = ({ user, toggleModal, submitProfileUpdate }) => {

    const [userData, setUserData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        age: user.age
    });
    const onFormChange = (event) => {
        switch (event.target.name) {
            case 'firstname':
                setUserData({ ...userData, first_name: event.target.value })
                break;
            case 'lastname':
                setUserData({ ...userData, last_name: event.target.value })
                break;
            case 'age':
                setUserData({ ...userData, age: event.target.value })
                break;
            default:
                return;
        }
    }

    const { first_name, last_name, age } = userData;
    const { id } = user;
    return (
        <div className="profile-modal">
            <article
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-s mw6 shadow-3 center bg-white">
                <main className="pa4 black-80 w-80">
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="h3 w3 dib" alt="avatar" />
                    <h1>{`${first_name} ${last_name}`}</h1>
                    <h4>{`Images Submitted: ${user.entries}`}</h4>
                    <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                    <hr />
                    <label className="mt2 fw6" htmlFor="user-first-name">First Name:</label>
                    <input onChange={onFormChange}
                        className="pa2 ba w-100"
                        placeholder={user.first_name}
                        type="text" name="firstname" id="firstname" />
                    <label className="mt2 fw6" htmlFor="user-last-name">Last Name:</label>
                    <input onChange={onFormChange}
                        className="pa2 ba w-100"
                        placeholder={last_name} type="text" name="lastname" id="lastname" />
                    <label className="mt2 fw6" htmlFor="user-age">Age:</label>
                    <input onChange={onFormChange}
                        className="pa2 ba w-100"
                        placeholder={age} type="text" name="age" id="age" />
                    <div className="mt4" style={{ display: "flex", justifyContent: 'space-evenly' }}>
                        <button
                            onClick={() => submitProfileUpdate({ first_name, last_name, age, id })}
                            className="b pa2 grow hover-bg-blue w-40 b--blue b--black-20">Save</button>
                        <button className="b pa2 grow hover-bg-light-red w-40 b--light-red b--black-20"
                            onClick={toggleModal}
                        >Cancel</button>
                    </div>
                </main>
                <div className="modal-close" onClick={toggleModal}>&times;</div>
            </article>
        </div>)
}

const mapStateToProps = ({ login: { user } }) => ({
    user
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
    submitProfileUpdate: (updatedUserData) => dispatch(submitProfileUpdate(updatedUserData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);