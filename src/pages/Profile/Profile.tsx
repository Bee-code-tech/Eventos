import { useState } from "react";
// import AllEventsTab from "./AllEventsTab";
// import MyEventsTab from "./MyEventsTab";
import ClaimNFTTab from "./ClaimNFTTab";
import toast, { Toaster } from "react-hot-toast"; // React Hot Toast for notifications
import { FaCopy } from "react-icons/fa"; // Copy icon from react-icons
import EventList from "@/components/EventList/EventCard";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"all" | "myEvents" | "claimNFT">("all");

  // Example wallet address
  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";

  // Function to copy the wallet address and show a toast
  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("Wallet address copied!");
  };

  // Format the wallet address to show first and last 4 characters with '...'
  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Render the tab content based on activeTab state
  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return <EventList grid={3} />;
      case "myEvents":
        return <EventList grid={3} />;
      case "claimNFT":
        return <ClaimNFTTab />;
      default:
        return null;
    }
  };

  return (
    <div className="container min-h-screen px-4 mx-auto mt-32 mb-24">
      <Toaster /> {/* Toast container for notifications */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md md:col-span-1 h-[300px]">
          {/* Gradient Circle */}
          <div className="w-32 h-32 mb-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
          {/* Wallet Address and Copy Icon */}
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold">{formatWalletAddress(walletAddress)}</p>
            <FaCopy
              className="text-gray-600 cursor-pointer hover:text-gray-800"
              onClick={copyToClipboard}
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="p-6 bg-white rounded-lg shadow-md md:col-span-4">
          <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

          {/* Tabs */}
          <div className="flex space-x-10 border-b">
            <button
              className={`pb-2 text-lg ${
                activeTab === "all" ? "border-b-2 border-slate-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Events
            </button>
            <button
              className={`pb-2 text-lg ${
                activeTab === "myEvents" ? "border-b-2 border-slate-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("myEvents")}
            >
              My Events
            </button>
            <button
              className={`pb-2 text-lg ${
                activeTab === "claimNFT" ? "border-b-2 border-slate-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("claimNFT")}
            >
              Claim NFT
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
