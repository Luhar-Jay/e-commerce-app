import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);

    setproducts(json);
  };

  return (
    <div className="flex flex-wrap bg-slate-100">
      {Array.isArray(products) &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
