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

  const { name } = useParams();
  const [data, setData] = useState(null);

  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data =
      allProducts && allProducts?.find((i) => i.name === productName);
    setData(data);
  }, [allProducts, name]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
