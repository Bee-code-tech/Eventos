import React from "react";

interface EventCardProps {
  event: { id: number; name: string; description: string };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">{event.name}</h2>
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
