import { Link } from "react-router-dom";
import RetroGrid from "@/components/ui/retro-grid"; // RetroGrid animation
import EventList from "@/components/EventList/EventCard";
import { MarqueeDemo } from "@/components/Marquee/Marquee";

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-3 overflow-hidden bg-background">
        <div className="text-center">
          {/* Heading with the last two words in purple */}
          <h1 className="-mt-32 text-5xl font-bold text-black md:text-7xl">
            Welcome to the ultimate event experience on{" "}
            <span className="text-purple-600">Eventos platform</span>
          </h1>

          {/* Updated Description */}
          <p className="mt-4 text-lg text-slate-700 md:text-xl">
            Discover, create, and manage events effortlessly with the best event solution built just for you.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Link
              to="/events"
              className="px-6 py-3 text-white rounded-lg bg-slate-500 hover:bg-slate-500"
            >
              Browse Events
            </Link>
            <Link
              to="/profile"
              className="px-6 py-3 text-white rounded-lg bg-slate-900 hover:bg-gray-600"
            >
              My Profile
            </Link>
          </div>
        </div>

        {/* RetroGrid Component (Animation) */}
        <RetroGrid />
      </div>

      {/* Latest Events Section */}
      <div className="container p-4 mx-auto my-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Events</h2>
          <Link
            to="/events"
            className="text-blue-600 hover:underline"
          >
            See All
          </Link>
        </div>

        {/* Event List (limited to 3) */}
        <EventList limit={4} />
      </div>

      {/* Marquee Section  */}
      <MarqueeDemo />
    </div>
  );
};

export default Home;
