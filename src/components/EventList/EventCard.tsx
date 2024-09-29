import React from "react";
import EventCard from "../EventCard/EventCard";
import { events } from "../../data"; // Importing the events from data.ts

interface EventListProps {
  limit?: number;
}

const EventList: React.FC<EventListProps> = ({ limit }) => {
  // Limit the events displayed if the 'limit' prop is passed
  const displayedEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {displayedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
