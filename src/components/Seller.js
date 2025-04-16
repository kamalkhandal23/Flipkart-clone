import React from "react";
import StoreIcon from '@mui/icons-material/Store';

const SellerButton = () => {
    return (

        <div className="nav-item">
           
                <StoreIcon style={{fontSize : "27px", color:'#000'}} className="nav-icon"/>
                <span className="nav-text">Become a Seller</span>
             
        </div>

    )
};

export default SellerButton;
