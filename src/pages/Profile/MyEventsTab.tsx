import React, { useState } from "react";
import EventModal from "../../components/Modal/EventModal";


const MyEventsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        Create Event
      </button>
      {isModalOpen && <EventModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default MyEventsTab;
