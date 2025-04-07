import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, FaEnvelope, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const UserProfile = () => {
    return (

        <>
            <div className="profile-container">
                <a className="user-span">
                    <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                    <span className="profile-btn">SHRIRAM</span>

                </a>
            </div>
        </>

    )
};

export default UserProfile;
