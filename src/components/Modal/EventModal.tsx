import React, { useState } from 'react';
import { FaTrash, FaBuilding } from 'react-icons/fa6';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  addEvent: (newEvent: Event) => void;
}

interface Event {
  id: number;
  title: string;
  image: string;
  description: string;
  startTime: string;
  endTime: string;
  venue: string;
  price: string;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, addEvent }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [startTime, setStartTime] = useState('');
  const [description, setDescription] = useState('');
  const [endTime, setEndTime] = useState('');
  const [price, setPrice] = useState('');
  const [venue, setVenue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create the new event object
    const newEvent: Event = {
      id: Date.now(), // Unique id
      title,
      image,
      description,
      startTime,
      endTime,
      venue,
      price,
    };

    // Add the event to the list
    addEvent(newEvent);

    // Close the modal
    onClose();

    // Clear the form
    setTitle('');
    setImage('');
    setStartTime('');
    setDescription('');
    setEndTime('');
    setPrice('');
    setVenue('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg w-[450px]">
        <h2 className="mb-4 text-2xl font-bold">Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-2 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Short Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Start Time</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">End Time</label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Venue</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="w-full px-2 py-1 border rounded"
              required
            />
          </div>
          <div className="flex justify-between mt-8">
            {/* Cancel Button */}
            <div
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-3 text-white bg-red-600 rounded cursor-pointer"
            >
              <FaTrash />
              <span className="py-2 text-white">Cancel</span>
            </div>

            {/* Create Event Button */}
            <div className="flex items-center justify-center gap-2 px-3 text-white bg-black rounded">
              <FaBuilding />
              <button type="submit" className="py-2 text-white bg-black rounded">
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
