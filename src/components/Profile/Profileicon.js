import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../actions/userAuth.actions';
import { toggleModal, resetImageState } from '../../actions/user.actions';

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const ProfileIcon = ({ toggleModal, signOut, resetImageState }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="pa4 tc">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <img
                        src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png"
                        className="br-100 h3 w3 dib hover-bg-white grow" alt="avatar" />
                </DropdownToggle>
                <DropdownMenu

                    className='b--transparent shadow-5' style={{ left: '-75px', top: '90%', backgroundColor: "rgba(255, 255,255, 0.5)" }}>
                    <DropdownItem onClick={toggleModal}>
                        View Profile</DropdownItem>
                    <DropdownItem
                        onClick={() => {
                            window.sessionStorage.clear();
                            resetImageState();
                            signOut();
                        }}>Sign out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    resetImageState: () => dispatch(resetImageState()),
    signOut: () => dispatch(signOut()),
    toggleModal: () => dispatch(toggleModal())
})

export default connect(null, mapDispatchToProps)(ProfileIcon);