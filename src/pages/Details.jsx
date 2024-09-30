import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/slicers/products";
import { GoStarFill } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";

const Details = () => {
    const { id } = useParams();
    const { singleProduct } = useSelector((state) => state.singleProduct);
    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [dispatch]);

    console.log(id);
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

                <div className="flex items-center gap-2">
                    <button>
                        <CgMathMinus
                            fontSize={36}
                            className="p-2 bg-zinc-800 text-white rounded-md"
                        />
                    </button>
                    <span>0</span>
                    <button>
                        <CgMathPlus
                            fontSize={36}
                            className="p-2 bg-zinc-800 text-white rounded-md"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
