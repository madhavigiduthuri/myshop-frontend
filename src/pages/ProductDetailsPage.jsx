/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  // console.log(eventData);

  // const productName = name.replace(/-/g, " ");

  useEffect(() => {
    if (eventData !== null) {
      const data =
        allEvents &&
        allEvents.length > 0 &&
        allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data =
        allProducts &&
        allProducts.length > 0 &&
        allProducts.find((i) => i._id === id);
      setData(data);
    }
  }, [allProducts, allEvents, data]);

  // console.log("xyz", data);
  // console.log("abc", state);

  // 1.console lo enduku vethakaledu...?

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!eventData && <>{data && <SuggestedProduct data={data} />}</>}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
