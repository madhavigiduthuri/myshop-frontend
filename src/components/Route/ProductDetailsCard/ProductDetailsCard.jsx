import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url } from "../../../server";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-[#fff] rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data?.image_Url[0].url} alt="best-deal-img" />

                {/* {data?.image_Url?.length > 0 ? (
                  <img src={data?.image_Url[0].url} alt="best-deal-img" />
                ) : data?.images?.length > 0 ? (
                  <img src={data?.images[0]} alt="best-deal-img" />
                ) : null} */}
                <div className="flex">
                  {data && data?.shop && data?.shop?.shop_avatar ? (
                    <img
                      src={data?.shop?.shop_avatar?.url}
                      alt="amazon-icon-img"
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  ) : data && data?.shop && data?.shop?.avatar ? (
                    <Link to={`/shop/preview/${data?.shopId}`}>
                      <img
                        src={`${backend_url}${data?.shop?.avatar}`}
                        alt="amazon-icon-img"
                        className="w-[50px] h-[50px] rounded-full mr-2"
                      />
                    </Link>
                  ) : null}

                  <div>
                    <Link to={`/shop/preview/${data?.shopId}`}>
                      <h3 className={`${styles.shop_name} text-[#31e8e5]`}>
                        {data?.shop?.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      ({data?.shop?.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-[black] mt-4 rounded h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient bg-[#31e8e5] text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[9.2px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient bg-[#31e8e5] text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-black mt-6 rounded-[4px] h-11 flex items-center`}
                >
                  <span className="text-[#fff]  flex items-center">
                    Add to cart{" "}
                    <AiOutlineShoppingCart className="ml-2" size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
