import React, { useEffect, useState } from "react";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFlashlightOff } from "react-icons/md";
import { MdOutlineFlashlightOn } from "react-icons/md";
import { useDispatch } from "react-redux";
import { showDrawer } from "../redux/slicers/drawer";

const Navbar = () => {
    const [color, setColor] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const root = document.getElementById("root");
        if (color) {
            root.style.backgroundColor = "#111";
            root.style.color = "#f7f7f7";
        } else {
            root.style.backgroundColor = "#f7f7f7";
            root.style.color = "#111";
        }
    });
    return (
        <div className="flex items-center justify-between px-3 h-20">
            <div>Trenyol</div>
            <div className="flex items-center space-x-4 ">
                <input type="text" placeholder="Search" />
                <div onClick={() => setColor(!color)}>
                    {!color ? (
                        <MdOutlineFlashlightOn size={24} />
                    ) : (
                        <MdOutlineFlashlightOff size={24} />
                    )}
                </div>
                <button
                    className="relative"
                    onClick={() => dispatch(showDrawer())}
                >
                    <AiOutlineShoppingCart size={24} />
                    <span className="absolute right-0 top-0 px-1 bg-red-500 text-white rounded-full text-sm p-0.5">
                        3
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
