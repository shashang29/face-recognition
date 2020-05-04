import React from 'react';
import { connect } from 'react-redux';

import Facerecognition from '../components/Facerecognition/Facerecognition';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Modal from '../components/Modal/Modal';
import Profile from '../components/Profile/Profile';

import { loginUserRequest } from '../actions/userAuth.actions';


const Dashboard = ({ isProfileOpen, user, toggleModal }) => {

    return (
        <div>
            <Rank />
            <ImageLinkForm />
            <Facerecognition />
            {isProfileOpen &&
                <Modal>
                    <Profile />
                </Modal>}
        </div>
    )
}
const mapStateToProps = ({ toggleProfile: { isProfileOpen } }) => ({
    isProfileOpen: isProfileOpen
});

export default connect(mapStateToProps)(Dashboard);