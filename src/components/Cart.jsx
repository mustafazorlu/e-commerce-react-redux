import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { showDrawer } from "../redux/slicers/drawer";

const Cart = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-[500px] h-full border fixed top-0 right-0 z-50 bg-white p-8">
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
                <div className="flex gap-4">
                    <img
                        className="w-20 h-20 object-cover p-3 bg-[#eee] rounded-md"
                        src={
                            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtfiJuF-663TnJH9tHSKLh3i-O4pVB4oK1RSc3iQkEafYEJTU2mL2Tscc3yuz2M5ZEZ0JTtCMNtBbMTsHg8Mu3WEOK7hwvCk_c4bTyF1UnwD1RqchEx07AKw&usqp=CAE"
                        }
                        alt=""
                    />
                    <div>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span className="font-bold">$150</span>
                    </div>
                    <button className="py-2 px-4 rounded-md bg-red-600 font-medium text-white h-fit">
                        Sil
                    </button>
                </div>
                <div className="flex gap-4">
                    <img
                        className="w-20 h-20 object-cover p-3 bg-[#eee] rounded-md"
                        src={
                            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtfiJuF-663TnJH9tHSKLh3i-O4pVB4oK1RSc3iQkEafYEJTU2mL2Tscc3yuz2M5ZEZ0JTtCMNtBbMTsHg8Mu3WEOK7hwvCk_c4bTyF1UnwD1RqchEx07AKw&usqp=CAE"
                        }
                        alt=""
                    />
                    <div className="">
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <span className="font-bold">$150</span>
                    </div>
                    <button className="py-2 px-4 rounded-md bg-red-600 font-medium text-white h-fit">
                        Sil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
