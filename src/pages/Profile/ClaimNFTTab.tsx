import React, { useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa6"; // Ethereum icon
import { nfts } from "../../data"; // Import NFT data from data.ts

// Define the structure of the timeLeft object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Define the structure of an NFT object
interface NFT {
  id: number;
  name: string;
  image: string;
  startTimestamp: number | null; // Unix timestamp for when NFT minting starts
  endTimestamp: number | null; // Unix timestamp for when NFT minting ends (claimable after this)
  price: number;
}

// Helper function to calculate time remaining for the end of the event (claimable time)
const calculateTimeLeft = (endTimestamp: number | null): TimeLeft | null => {
  if (!endTimestamp) return null; // If endTimestamp is null, return null

  const now = +new Date(); // Current time in milliseconds
  const difference = endTimestamp * 1000 - now; // Convert Unix to ms

  if (difference <= 0) return null; // If time is up, return null

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// Individual NFT Card Component
const NFTCard: React.FC<{ nft: NFT }> = ({ nft }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(nft.endTimestamp));
  const [isClaimable, setIsClaimable] = useState(false);



  useEffect(() => {
    if (nft.endTimestamp) {
      const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(nft.endTimestamp);
        setTimeLeft(updatedTimeLeft);

        // Check if the current time has passed the endTimestamp (event passed)
        if (nft.endTimestamp && nft.endTimestamp * 1000 <= +new Date()) {
          setIsClaimable(true); // Claimable after the event has passed
        }
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval on unmount
    } else {
      setIsClaimable(true); // If no end timestamp, make claimable immediately
    }
  }, [nft.endTimestamp]);

  return (
    <div
      className="overflow-hidden border rounded-lg shadow-lg"
      data-aos="fade-up" // AOS animation attribute
      data-aos-delay={nft.id * 100} // Delay animation based on the index of the NFT
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={nft.image}
          alt={nft.name}
          className="object-cover w-full h-64 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        {/* Badge */}
        <div className="absolute px-3 py-1 text-xs text-white bg-purple-600 rounded-full top-2 left-2">
          NFT
        </div>
      </div>

      {/* NFT Details */}
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{nft.name}</h2>

        {/* Countdown Timer (if not yet claimable) */}
        {nft.startTimestamp && nft.endTimestamp && !isClaimable && timeLeft && (
          <div className="grid grid-cols-4 gap-2 mb-4 text-center">
            <div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p className="text-lg font-bold">{timeLeft.days}</p>
                <p className="text-xs">Days</p>
              </div>
            </div>
            <div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p className="text-lg font-bold">{timeLeft.hours}</p>
                <p className="text-xs">Hours</p>
              </div>
            </div>
            <div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p className="text-lg font-bold">{timeLeft.minutes}</p>
                <p className="text-xs">Minutes</p>
              </div>
            </div>
            <div>
              <div className="p-2 bg-gray-200 rounded-lg">
                <p className="text-lg font-bold">{timeLeft.seconds}</p>
                <p className="text-xs">Seconds</p>
              </div>
            </div>
          </div>
        )}

        {/* Claim Button */}
        <div className="flex items-center justify-between">
          <button
            className={`px-4 py-2 text-white rounded-lg ${
              isClaimable ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isClaimable}
          >
            {isClaimable ? "Claim NFT" : "Claim NFT (Locked)"}
          </button>

          {/* Price in Ethereum */}
          <div className="flex items-center">
            <FaEthereum className="mr-1" />
            <span className="font-bold">{nft.price} ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ClaimNFTTab Component
const ClaimNFTTab = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
};

export default ClaimNFTTab;
