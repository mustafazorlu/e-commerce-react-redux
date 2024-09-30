import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showDrawer } from "../redux/slicers/drawer";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    return (
        <div className="w-[460px] h-[96%] rounded-lg border fixed top-1/2 -translate-y-1/2 right-5 z-50 bg-white p-8">
            <div className="flex items-center h-20 justify-between">
                <h1 className="text-2xl">Sepetim</h1>
                <AiOutlineClose
                    onClick={() =>
                        dispatch(showDrawer({ type: "drawer", payload: false }))
                    }
                    size={25}
                    className="cursor-pointer"
                />
            </div>

            <div className="cart-items flex flex-col gap-6">
                {cart?.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>

            <div className="total">Total :</div>
        </div>
    );
};

export default Cart;
