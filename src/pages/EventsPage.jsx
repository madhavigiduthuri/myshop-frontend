import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Route/Events/EventCard";
import { useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log("allEvents", allEvents);
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} data={allEvents && allEvents[1]} />
      <Footer />
    </div>
  );
};

export default EventsPage;
