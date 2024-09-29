import React from "react";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <div>Trenyol</div>
            <div>
                <input type="text" placeholder="Search" />
                <BsLightbulb />
                <div className="relative">
                    <AiOutlineShoppingCart />
                    <span>3</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
