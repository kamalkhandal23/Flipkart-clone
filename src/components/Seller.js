import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faHandshake, FaHandshake, faUser } from "@fortawesome/free-solid-svg-icons";

const SellerButton = () => {
    return (
        <>
            <div className="seller-container">
                <a className="seller-span">
                    <FontAwesomeIcon icon={faHandshake} className="seller-icon" />
                    <span className="seller-btn">Become a Seller</span>
                </a>
            </div>
        </>
    )
};

export default SellerButton;
