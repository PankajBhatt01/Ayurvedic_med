import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsEyeFill, BsPlus } from "react-icons/bs";
import { baseUrl } from "../../constant";
import { CartContext } from "../../context/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  console.log("productCards", product);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={`${`${baseUrl}${product?.attributes.image.data.attributes.url}`}`}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, product?.id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${product?.id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <Link to={`/product/${product?.id}`}>
          <div className="tex-sm capitalize text-gray-500 mb-1">
            {product?.attributes.name}
          </div>
          {/* <h2 className="font-semibold mb-1">{title}</h2> */}
          <h2> scientific name:{product?.attributes.scientific_name}</h2>
          <h2> common name:{product?.attributes.common_name}</h2>
        </Link>

        <h2 className="font-semibbold">$ {product?.attributes.price}</h2>
      </div>
    </div>
  );
};

export default Product;