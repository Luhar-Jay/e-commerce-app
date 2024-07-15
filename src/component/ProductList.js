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
    // setSuggestions(searchFilter.slice(0, 5));
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
      url: "https://static.vecteezy.com/system/resources/thumbnails/002/043/612/small_2x/special-offer-banner-sale-promotion-web-market-poster-file-vector.jpg",
      caption: "Third Slide",
    },
  ];

  return (
    <div className="  ">
      {/* <Slide className="w-auto h-auto">
            {fadeImages.map((fadeImage, index) => (
              <div className="each-slide h-auto" key={index}>
                <div
                  style={{ backgroundImage: `url(${fadeImage.url})` }}
                  className="bg-cover bg-center h-96 "
                ></div>
              </div>
            ))}
          </Slide> */}
      <div className="flex justify-center h-full md:flex-row flex-wrap">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 xl:w-2/3 flex items-center text-center py-12 md:py-60">
            <div className="px-5 md:px-10">
              <p className="text-lg md:text-2xl">
                30% off on our Fantastic Summer
              </p>
              <h1 className="font-bold font-serif text-3xl md:text-4xl p-5">
                COLLECTIONS!!
              </h1>
              <p className="text-wrap p-5 mx-64 font-medium font-sans">
                Enhance the visual impression of your face to multiple levels.
                Compare our styles on various faces- Quality Promised.
              </p>
              <button className="border border-black rounded-full bg-gray-900 hover:bg-black text-white p-2 md:p-4">
                SHOP NOW!
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3">
            <img
              className="object-cover h-full w-full"
              alt="img"
              src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-774.png"
            />
          </div>
        </div>
      </div>
      {/* <div className=" mb-4 flex"> */}
      <div className="py-2 flex flex-wrap md:flex-col  mb-4 p-4 mx-4 mt-10">
        <div className="md:flex md:flex-wrap justify-center">
          <input
            onSubmit={(e) => e.preventDefault}
            className="border border-black rounded-l-lg p-2 w-full md:w-64 xl:w-80"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={() => handleSearch(search)}
            placeholder="Search"
          />

          {suggestions.length > 0 && (
            <ul className="absolute bg-white border w-full md:w-64 xl:w-80 mt-0 ml-0 md:ml-80 border-gray-100 rounded-b-lg max-h-48 overflow-y-auto">
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
          <div className="flex flex-wrap md:flex-nowrap">
            <button
              className="bg-green-400 p-2 border border-black rounded-r-lg md:w-32 xl:w-40"
              onClick={handleSearchClick}
            >
              Search
            </button>
            <button
              className="bg-blue-500 p-2 px-1 md:ml-12 ml-2 rounded-lg font-medium  w-20 md:w-32 xl:w-40"
              onClick={handleTopRatedClick}
            >
              {!isTopRated ? "Show All" : "Top "}
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row m-2 justify-center">
        <div class="relative w-full md:w-[750px] h-[400px] m-2">
          <img
            class="w-full h-full object-cover"
            alt="ad-poster"
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-775.jpg"
          />
          <div class="absolute inset-y-0 left-0 flex flex-col justify-center p-4 bg-opacity-75">
            <p class="font-sans text-xl text-black mb-2">Up to 20 % off on</p>
            <h1 class="font-serif font-bold text-black text-4xl mb-4">
              HOT PRODUCTS!
            </h1>
            <button class="font-sans border w-32 border-black p-2 bg-gray-900 hover:bg-black text-white">
              SHOP NOW!
            </button>
          </div>
        </div>
        <div class="relative w-full md:w-[750px] h-[400px] m-2">
          <img
            class="w-full h-full object-cover"
            alt="ad-poster"
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-776.jpg"
          />
          <div class="absolute inset-y-0 right-0 flex flex-col justify-center text-end items-end p-4 bg-opacity-75">
            <p class="font-sans text-xl text-black mb-2 ">
              How to choose the right frame?
            </p>
            <h1 class="font-serif font-bold text-black text-4xl mb-4 w-96">
              BUY LESS. CHOOSE WELL.
            </h1>
            <button class="font-sans border border-black  bg-gray-900 hover:bg-black p-2 w-32 text-white">
              READ MORE!
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-black m-5">
        <h1 className="md:text-2xl xl:text-3xl font-bold mt-14 mb-2  justify-center">
          All Products
        </h1>
      </div>
      <div className="md:mx-4 md:p-4  ">
        <div className="flex flex-wrap justify-center">
          {Array.isArray(filteredProduct) && filteredProduct.length > 0
            ? filteredProduct.map((product) => (
                <Link to={`/view/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    className="w-full md:w-1/2 lg:w-1/4 border border-black xl:w-1/4 p-4"
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

      <div className="mb-10 shadow-lg mx-4">
        <div class="relative w-full h-full flex justify-center items-center">
          <img
            class="h-[750px] w-[1500px]  rounded-lg"
            alt="add-poster-2"
            src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-777.jpg"
          />
          <div class="absolute inset-0 flex flex-col  justify-center items-center">
            <div class="bg-[#0B1C2D]  bg-opacity-75  p-8 text-center w-full max-w-3xl mx-4 md:mx-auto">
              <p class="text-gray-300 mb-2">Hot Deals:</p>
              <h1 class="font-serif font-bold text-white text-2xl md:text-4xl mb-4">
                GEAR UP THIS SUMMER! PLACE YOUR FIRST ORDER AND GET 15% OFF.
              </h1>
              <button class="font-sans border border-white p-3 bg-gray-900 hover:bg-black text-white">
                SHOP NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
