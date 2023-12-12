import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { API } from "./constant";
import { CartContext } from "./context/CartContext";
import { ProductContext } from "./context/ProductContext";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // const apiUrl = "http://localhost:1337";

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  console.log("productDetails ", product);
  // destructure product
  return (
    <section className="pt-[450px] md:pt-32  pb-[400px] md:pb-12 lg:py-32 h-full flex items-center">
      <div className="container mx-auto ">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-xs"
              src={`${`${API}${product?.attributes.image.data.attributes.url}`}`}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.attributes.name}
            </h1>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              scientific name:{product?.attributes.scientific_name}
            </h3>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              common name:{product?.attributes.common_name}
            </h3>
            <h1>How It Works:</h1>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.attributes.working}
            </h3>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.attributes.descriptioin}
            </h3>
            <h1>Patient Warning:</h1>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.attributes.patient_warning}
            </h3>
            <h1>Need To know:</h1>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.attributes.need_to_know}
            </h3>
            <h1>Side Effects</h1>
            <h3 className="font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.attributes.side_effect}
            </h3>

            <div className="text-2xl text-red-500 font-medium mb-6">
              $ {product?.attributes.price}
            </div>
            <button
              onClick={() => addToCart(product, product?.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
