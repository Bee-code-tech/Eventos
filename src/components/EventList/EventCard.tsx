import React from "react";
import EventCard from "../EventCard/EventCard";

interface EventListProps {
  limit?: number;
}

const EventList: React.FC<EventListProps> = ({ limit }) => {
  // Example event data
  const events = [
    { id: 1, name: "Event 1", description: "Description of event 1" },
    { id: 2, name: "Event 2", description: "Description of event 2" },
    { id: 3, name: "Event 3", description: "Description of event 3" },
    { id: 4, name: "Event 4", description: "Description of event 4" },
  ];

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
