import React from "react";

interface EventModalProps {
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Create Event</h2>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
