import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEllipsisVertical } from "react-icons/fa6";


const Moreinfo = () => {
    return (
        <>
            <div className="more-info-container">
                <a className="more-span">
                <FontAwesomeIcon icon={FaEllipsisVertical} />
                    <span className="more-info"></span>
                </a>
            </div>
        </>
    )
};

export default Moreinfo;
