import React from 'react'
import {Link}from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import {useSelector} from "react-redux";

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer);
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/">
                        <img src="/images/logo.webp" alt="Logo" />
                        </Link>
                         
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                            <BsFillBagFill className="cart-icon"/>
                            <span>{totalQuantities}</span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Nav
