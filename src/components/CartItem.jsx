/* eslint-disable react/prop-types */
import React from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "../redux/slicers/cart";

const CartItem = ({ title, price, image, quantity, item }) => {
    const dispatch = useDispatch();
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
                    ${price}
                    <div className="flex items-center gap-1">
                        <button onClick={() => dispatch(decreaseCount(item))}>
                            <CgMathMinus
                                fontSize={22}
                                className="p-1 bg-zinc-800 text-white rounded-md"
                            />
                        </button>
                        {quantity}
                        <button onClick={() => dispatch(increaseCount(item))}>
                            <CgMathPlus
                                fontSize={22}
                                className="p-1 bg-zinc-800 text-white rounded-md"
                            />
                        </button>
                    </div>
                </span>
            </div>
            <button className=" text-sm p-2 rounded-md bg-red-600 font-medium text-white h-fit">
                <RiDeleteBin5Line fontSize={20} />
            </button>
        </div>
    );
};

export default CartItem;
