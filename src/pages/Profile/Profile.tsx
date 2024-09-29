import  { useState } from "react";
import AllEventsTab from "./AllEventsTab";
import MyEventsTab from "./MyEventsTab";
import ClaimNFTTab from "./ClaimNFTTab";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"all" | "myEvents" | "claimNFT">("all");

  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return <AllEventsTab />;
      case "myEvents":
        return <MyEventsTab />;
      case "claimNFT":
        return <ClaimNFTTab />;
      default:
        return null;
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Profile</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "all" && "active"}`}
          onClick={() => setActiveTab("all")}
        >
          All Events
        </button>
        <button
          className={`tab ${activeTab === "myEvents" && "active"}`}
          onClick={() => setActiveTab("myEvents")}
        >
          My Events
        </button>
        <button
          className={`tab ${activeTab === "claimNFT" && "active"}`}
          onClick={() => setActiveTab("claimNFT")}
        >
          Claim NFT
        </button>
      </div>
      <div className="mt-4 tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Profile;
