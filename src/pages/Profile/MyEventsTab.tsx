import  { useState } from "react";
import EventModal from "../../components/Modal/EventModal";
import EventList from "@/components/EventList/EventCard";
import { FaPlusCircle } from "react-icons/fa";


const MyEventsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
     <div className="flex items-center justify-between w-full mb-8">

        <h1 className="text-2xl font-bold">My Events </h1>
         <button className="flex items-center justify-center px-4 py-2 text-white rounded-lg btn bg-slate-600" onClick={() => setIsModalOpen(true)}>
            <FaPlusCircle className="mr-2 text-xl" />
        Create Event
      </button>
      {isModalOpen && <EventModal onClose={() => setIsModalOpen(false)} />}
     </div>

        <EventList grid={3} edit={true} limit={5}/>
    </div>
  );
};

export default MyEventsTab;
