import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown";

const EventCard = (props) => {
  const { active, data } = props;
  // console.log("events", data);
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w[50%] m-auto">
        <img src={`${data?.image_Url[0].url}`} alt="events-img" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>{data?.name}</h2>
        <p>{data?.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data?.price}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data?.discount_price}$
            </h5>
          </div>
          <span className="pr-3 font-bold text-[17px] text-[#F6BA00]">
            120 sold
          </span>
        </div>
        <CountDown data={data} />
      </div>
    </div>
  );
};

export default EventCard;
