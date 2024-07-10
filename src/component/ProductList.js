import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  const [filteredProduct, setFilteredproduct] = useState([]);
  const [isTopRated, setIsTopRated] = useState(true);
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

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

  const handleSearch = (item) => {
    setFilteredproduct([]);
    const searchFilter = products.filter(
      (i) => i.title && i.title.toLowerCase().includes(item.toLowerCase())
    );
    setFilteredproduct(searchFilter);
  };

  const handleSuggestion = (suggestion) => {
    setSearch(suggestion.title);
    setFilteredproduct([suggestion]);
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    handleSearch(search);
  };

  return (
    <div className="mx-4 p-4 md:px-8 md:py-12">
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 p-2 rounded-lg font-medium w-20 md:w-32"
          onClick={handleTopRatedClick}
        >
          {!isTopRated ? "Show All" : "Top Rated"}
        </button>
        <input
          onSubmit={(e) => e.preventDefault}
          className="border border-black rounded-l-lg p-2 w-96 md:w-64 ml-4"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          // onBlur={() => setSuggestions()}
          // onFocus={() => handleSearch(search)}
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border w-64 mt-10 ml-5 border-gray-100 rounded-b-lg max-h-48 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestion(suggestion)}
              >
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-green-400 p-2 border border-black rounded-r-lg md:w-32"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="border-b py-2 border-black mb-4">
        <h1 className="text-2xl font-bold">All Products</h1>
      </div>
      <div className="flex flex-wrap justify-center">
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
    </div>
  );
};

export default ProductList;
