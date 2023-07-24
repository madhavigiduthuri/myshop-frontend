/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productData } from "../static/data";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);

  const { id } = useParams();
  const [data, setData] = useState(null);

  // const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data =
      allProducts &&
      allProducts.length > 0 &&
      allProducts.find((i) => i._id === id);

    setData(data);
  }, [allProducts, data]);

  // console.log("xyz", data);
  // console.log("abc", state);

  // 1.console lo enduku vethakaledu...?

  return (
    <div>
      <Header />
      {data && <ProductDetails data={data} />}
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
