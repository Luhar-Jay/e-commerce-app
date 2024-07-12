import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

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
    console.log(search);
    return () => clearTimeout(timer);
  }, [search]);

  const getFetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

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
    setSuggestions(searchFilter.slice(0, 5));
  };

  const handleSuggestion = (suggestion) => {
    setSearch(suggestion.title);
    setFilteredproduct([suggestion]);
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    handleSearch(search);
  };

  // SlideShow images

  const fadeImages = [
    {
      url: "https://shopbrumano.com/cdn/shop/articles/Blog_Banner_14-09-2023.jpg?v=1694761685",
      caption: "First Slide",
    },
    {
      url: "https://img.freepik.com/free-vector/landing-page-template-cyber-monday_23-2149707767.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://img.freepik.com/premium-psd/best-winter-jacket-men-web-banner-design-template_691550-140.jpg",
      caption: "Third Slide",
    },
  ];

  return (
    <div className="  ">
      <div className="flex justify-center flex-wrap top-0 mb-4 mt-0 h-full">
        <div className="slide-container md:w-screen overflow-x-hidden w-[410px] h-full md:h-screen ">
          <Slide className="w-auto h-auto">
            {fadeImages.map((fadeImage, index) => (
              <div className="each-slide h-auto" key={index}>
                <div
                  style={{ backgroundImage: `url(${fadeImage.url})` }}
                  className="bg-cover bg-center h-96 "
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      {/* <div className=" mb-4 flex"> */}
      <div className="border-b py-2 flex flex-wrap border-black mb-4 p-4 m-4">
        <div>
          <input
            onSubmit={(e) => e.preventDefault}
            className="border border-black md:ml-80 rounded-l-lg p-2 w-6/12 md:w-64  z-10 "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={() => handleSearch(search)}
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
          <button
            className="bg-blue-500 p-2 px-1 md:ml-12 ml-2 rounded-lg font-medium  w-20 md:w-32"
            onClick={handleTopRatedClick}
          >
            {!isTopRated ? "Show All" : "Top "}
          </button>
        </div>
        <h1 className="md:text-2xl font-bold">All Products</h1>
      </div>

      <div className="md:mx-4 md:p-4 ">
        <div className="flex flex-wrap justify-center">
          {Array.isArray(filteredProduct) && filteredProduct.length > 0
            ? filteredProduct.map((product) => (
                <Link to={`/view/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
                  />
                </Link>
              ))
            : products.map((product) => (
                <Link to={`/view/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4"
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
