/* eslint-disable react/prop-types */
const ProductCard = ({ item }) => {
    return (
        <div className="w-1/5 flex flex-col  border bg-white rounded-lg p-4">
            <div className="w-full h-[175px] mb-4  flex-grow">
                <img
                    src={item?.image}
                    className="w-full h-full object-contain"
                    alt=""
                />
            </div>
            <h2 className="font-semibold text-2xl ">
                {item?.title.slice(0, 42) + "..."}
            </h2>
            <div className="text-sm text-slate-400 mb-3">
                {item?.description.length > 50
                    ? item?.description.charAt(0).toUpperCase() +
                      item?.description.slice(1, 20) +
                      "..."
                    : item?.description}
            </div>
            <div className="font-bold text-2xl mb-4">₺{item?.price}</div>
            <button className="py-2 px-3 bg-zinc-800 hover:bg-zinc-900 text-white rounded-md">
                Sepete Ekle
            </button>
        </div>
    );
};

export default ProductCard;
