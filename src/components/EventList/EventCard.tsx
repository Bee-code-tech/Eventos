import React from "react";
import EventCard from "../EventCard/EventCard";
import { events } from "../../data"; // Importing the events from data.ts

interface EventListProps {
  limit?: number;
  grid?: number; // Optional grid prop to customize the number of columns
}

const EventList: React.FC<EventListProps> = ({ limit, grid }) => {
  // Limit the events displayed if the 'limit' prop is passed
  const displayedEvents = limit ? events.slice(0, limit) : events;

  // Default to 4 columns in large screens, unless a custom 'grid' prop is passed
  const gridClass = grid
    ? `lg:grid-cols-${grid} md:grid-cols-3`
    : "lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${gridClass}`}>
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
