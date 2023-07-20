import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Route/Events/EventCard";
import { useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";

const EventsPage = () => {
  const { allEvents } = useSelector((state) => state.events);
  // console.log("allEvents", allEvents);
  return (
    <div>
      <Header activeHeading={4} />
      <div className={`${styles.section} my-[20px]`}>
        <EventCard active={true} data={allEvents && allEvents[1]} />
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
