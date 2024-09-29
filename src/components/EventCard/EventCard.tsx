import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"; // Calendar and Location Icons
import { FaEthereum } from "react-icons/fa6";


interface EventCardProps {
  event: {
    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    price: number;
    category: string;
    image: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform rounded-t-lg hover:scale-105"
        />
        {/* Badge */}
        <div className="absolute px-3 py-1 text-xs text-white rounded-full bg-slate-500 top-2 left-2">
          {event.category}
        </div>
      </div>

      {/* Event Details */}
      <div className="p-4">
        {/* Event Name */}
        <h2 className="mb-2 text-xl font-bold">{event.name}</h2>

        {/* Date */}
        <div className="flex items-center mb-2 text-gray-600">
          <FaCalendarAlt className="mr-2" />
          <span>{event.date}</span>
        </div>

        {/* Location */}
        <div className="flex items-center mb-4 text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          <span>{event.location}</span>
        </div>

        {/* Footer: Registration and Price */}
        <div className="flex items-center justify-between">
          {/* Register Button */}
          <button className="px-4 py-2 text-white rounded-lg bg-slate-600 hover:bg-slate-700">
            Register
          </button>

          {/* Price */}
          <div className="flex items-center">
            <FaEthereum className="mr-1" />
            <span className="font-bold">{event.price} ARB</span>
            <span className="ml-2 text-sm text-gray-500">($25.00)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
