import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/slicers/products";
import { GoStarFill } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { addCart } from "../redux/slicers/cart";

const Details = () => {
    const { id } = useParams();
    const { singleProduct } = useSelector((state) => state.singleProduct);
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const decrease = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };
    const increase = (stock) => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [dispatch]);

    return (
        <div className="flex gap-8 w-3/4 m-auto mt-16">
            <div className="flex-[2] rounded-lg overflow-hidden">
                <img
                    className="bg-white p-8 w-full h-[500px] object-contain"
                    src={singleProduct?.image}
                    alt=""
                />
            </div>
            <div className="flex-[2] p-8">
                <h1 className="font-bold text-3xl mb-4">
                    {singleProduct?.title}
                </h1>
                <p className="text-slate-400 mb-4 text-sm">
                    {singleProduct?.description}
                </p>
                <p className="font-semibold mb-4">
                    {singleProduct?.category?.toUpperCase()}
                </p>
                <p className="flex gap-2 items-center mb-8">
                    <GoStarFill fontSize={18} />
                    {singleProduct?.rating?.rate}
                </p>
                <p className="font-bold text-3xl mb-4">
                    ₺{singleProduct?.price}
                </p>

                <div className="flex items-center gap-2 mb-8">
                    <button onClick={() => decrease()}>
                        <CgMathMinus
                            fontSize={36}
                            className="p-2 bg-zinc-800 text-white rounded-md"
                        />
                    </button>
                    <span>{count}</span>
                    <button
                        onClick={() => increase(singleProduct?.rating?.count)}
                    >
                        <CgMathPlus
                            fontSize={36}
                            className="p-2 bg-zinc-800 text-white rounded-md"
                        />
                    </button>
                </div>

                <button
                    className="text bg-zinc-800 py-3 px-7 rounded-md text-white"
                    onClick={() => dispatch(addCart(singleProduct))}
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default Details;
