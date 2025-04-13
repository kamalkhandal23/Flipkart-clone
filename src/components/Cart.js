import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartButton = () => {
    return (

        <div className="nav-item">
            
                <ShoppingCartIcon className="nav-icon" style={{color:'#000', fontSize: 27 }}/>
                <span className="nav-text">Cart</span>
            
        </div>

    )
};

export default CartButton;
