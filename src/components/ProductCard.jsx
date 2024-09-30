import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="w-1/5 flex flex-col  border bg-white rounded-lg p-4 cursor-pointer">
            <div
                className="w-full !h-[175px] mb-4"
                onClick={() => navigate(`detail/${item.id}`)}
            >
                <img
                    src={item?.image}
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            <h2 className="font-semibold text-2xl ">
                {item?.title.length > 40
                    ? item?.title.substring(0, 42) + "..."
                    : item?.title}
            </h2>
            <div className="text-sm text-slate-400 mb-3  flex-grow">
                {item?.description.length > 50
                    ? item?.description.charAt(0).toUpperCase() +
                      item?.description.slice(1, 20) +
                      "..."
                    : item?.description}
            </div>
            <div className="font-bold text-2xl mb-4 ">₺{item?.price}</div>
            <button className="py-2 px-3 bg-zinc-800 hover:bg-zinc-900 text-white rounded-md">
                Sepete Ekle
            </button>
        </div>
    );
};

export default ProductCard;
