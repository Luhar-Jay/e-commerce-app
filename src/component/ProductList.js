import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import Electronics from "./Electronics";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  const [filteredProduct, setFilteredproduct] = useState([]);
  const [isTopRated, setIsTopRated] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFetchData();
  }, [products]);

  const getFetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);

    setproducts(json);
  };

  if (products.length === 0) {
    return <Shimmer />;
  }

  const handleTopRatedClick = () => {
    setIsTopRated(!isTopRated);
    setFilteredproduct([]);
    if (isTopRated) {
      setFilteredproduct(
        products.filter((item) => item.rating && item.rating.rate > 4)
      );
    } else {
      setFilteredproduct([]);
    }
  };

  const handleSearch = () => {
    setFilteredproduct([]);
    const searchFilter = products.filter((i) =>
      i.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredproduct(searchFilter);
  };

  return (
    <div className="  mx-4 p-4 ">
      <div className="flex justify-center">
        <button
          className=" bg-blue-500 p-2 rounded-lg font-medium"
          onClick={handleTopRatedClick}
        >
          {!isTopRated ? "Show All" : "Top Rated"}
        </button>
        <input
          className="border border-black rounded-l-lg p-2 w-96 ml-24"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <button
          className="bg-green-400 p-2 border border-black rounded-r-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="border-b py-2 border-black  ">
        <h1 className="text-2xl font-bold">All Products</h1>
      </div>
      <div className="flex flex-wrap ">
        {Array.isArray(filteredProduct) && filteredProduct.length > 0
          ? filteredProduct.map((product) => (
              <Link to={`/view/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))
          : products.map((product) => (
              <Link to={`/view/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))}
      </div>
      <Electronics />
    </div>
  );
};

export default ProductList;
