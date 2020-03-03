import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal }) => {
    return (
        <div className="profile-modal">
            <article
                className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-s mw6 shadow-3 center bg-white">
                <main className="pa4 black-80 w-80">
                    <img
                        src="http://tachyons.io/img/logo.jpg"
                        className="h3 w3 dib" alt="avatar" />
                    <h1>Shashang shrestha</h1>
                    <h4>Images Submitted: 5</h4>
                    <p>Member since: January</p>
                    <hr />
                    <label className="mt2 fw6" htmlFor="user-name">First Name:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="shashang"
                        type="text" name="firstname" id="firstname" />
                    <label className="mt2 fw6" htmlFor="user-name">Last Name:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="shrestha" type="text" name="lastname" id="lastname" />
                          <label className="mt2 fw6" htmlFor="user-name">Age:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="26" type="text" name="age" id="age" />
                           <div className="mt4" style={{display:"flex", justifyContent:'space-evenly'}}>
                    <button className="b pa2 grow pointer hover-bg-blue w-40 b--blue b--black-20">Save</button>
                    <button className="b pa2 grow pointer hover-bg-light-red w-40 b--light-red b--black-20">Cancel</button>
                </div>
                </main>
            </article>
        </div>)
}


export default Profile;