import React from "react";
import EventCard from "../EventCard/EventCard";
import { events } from "../../data"; // Importing the events from data.ts

interface EventListProps {
  limit?: number;
  grid?: number;
}

const EventList: React.FC<EventListProps> = ({ limit }) => {
  // Limit the events displayed if the 'limit' prop is passed
  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 `}>
      {displayedEvents.map((event, index) => (
        <div
          key={event.id}
          data-aos="fade-up" 
          data-aos-delay={index * 100} // Delay each card by 100ms * index
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
