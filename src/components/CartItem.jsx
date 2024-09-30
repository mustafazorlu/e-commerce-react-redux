/* eslint-disable react/prop-types */
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartItem = ({ title, price, image, quantity }) => {
    return (
        <div className="flex gap-4">
            <img
                className="w-16 h-16 object-contain p-3 bg-[#fff] border rounded-md"
                src={image}
                alt=""
            />
            <div className="flex-1">
                <p className="text-base font-medium">
                    {title.length > 28 ? title.substring(0, 28) + "..." : title}
                </p>
                <span className="font-bold">
                    ${price} - Qty: {quantity}
                </span>
            </div>
            <button className=" text-sm p-2 rounded-md bg-red-600 font-medium text-white h-fit">
                <RiDeleteBin5Line fontSize={20} />
            </button>
        </div>
    );
};

export default CartItem;
