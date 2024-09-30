import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slicers/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="flex gap-4 flex-wrap justify-center">
            {products &&
                products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
        </div>
    );
};

export default Home;
