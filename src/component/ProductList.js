import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);

    setproducts(json);
  };

  if (products.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap bg-slate-100">
      {Array.isArray(products) &&
        products.map((product) => (
          <Link to={`/view/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
    </div>
  );
};

export default ProductList;
