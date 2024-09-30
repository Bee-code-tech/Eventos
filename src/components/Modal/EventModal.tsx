import React, { useState } from 'react';
import { FaTrash, FaBuilding, FaUpload, FaSpinner } from 'react-icons/fa6';
import { uploadToPinata } from '../../utils/uploadToPinanta';
import { FaInfoCircle } from 'react-icons/fa';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  addEvent: (newEvent: Event) => void;
}

interface Event {
  id: number;
  title: string;
  image: string;
  nftImage: string;
  description: string;
  startTime: string;
  endTime: string;
  venue: string;
  price: string;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, addEvent }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [nftImage, setNftImage] = useState('');
  const [startTime, setStartTime] = useState('');
  const [description, setDescription] = useState('');
  const [endTime, setEndTime] = useState('');
  const [price, setPrice] = useState('');
  const [venue, setVenue] = useState('');

  // Loading states for image uploads
  const [eventImageLoading, setEventImageLoading] = useState(false);
  const [nftImageLoading, setNftImageLoading] = useState(false);

  const handleFileUpload = async (file: File, type: 'event' | 'nft') => {
    const setLoadingState = type === 'event' ? setEventImageLoading : setNftImageLoading;
    const setUrlState = type === 'event' ? setImage : setNftImage;

    setLoadingState(true); // Show spinner
    try {
      const url = await uploadToPinata(file);
      if (url) {
        setUrlState(url); // Store the uploaded URL
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoadingState(false); // Hide spinner
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create the new event object
    const newEvent: Event = {
      id: Date.now(), // Unique id
      title,
      image, // Event image URL
      nftImage, // NFT image URL
      description,
      startTime,
      endTime,
      venue,
      price,
    };

    // Add the event to the list
    addEvent(newEvent);

    // Close the modal and clear form
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setImage('');
    setNftImage('');
    setStartTime('');
    setDescription('');
    setEndTime('');
    setPrice('');
    setVenue('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg w-[500px] lg:max-h-[750px] overflow-y-auto max-h-[680px]">
        <h2 className="mb-4 text-2xl font-bold">Create New Event</h2>
        
        {/* Fancy Blockquote */}
        <blockquote className="flex items-start p-4 mb-6 bg-green-100 rounded-lg">
          <FaInfoCircle className="mr-3 text-2xl text-green-500" />
          <span className="text-sm text-green-800">
            Please upload both event and NFT images. The NFT image will be minted for all attendees.
          </span>
        </blockquote>

        <form onSubmit={handleSubmit}>
         

          {/* Upload Boxes - Side by Side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Event Image Upload */}
            <div className="relative flex items-center justify-center w-full h-48 border-2 border-dashed rounded-lg">
              {!image ? (
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  {eventImageLoading ? (
                    <FaSpinner className="text-4xl text-gray-400 animate-spin" />
                  ) : (
                    <>
                      <FaUpload className="text-4xl text-gray-400" />
                      <span className="mt-2 text-sm">Upload Event Image</span>
                    </>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0], 'event');
                      }
                    }}
                    required
                  />
                </label>
              ) : (
                <img src={image} alt="Event" className="absolute object-cover w-full h-full rounded-lg" />
              )}
            </div>

            {/* NFT Image Upload */}
            <div className="relative flex items-center justify-center w-full h-48 border-2 border-dashed rounded-lg">
              {!nftImage ? (
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  {nftImageLoading ? (
                    <FaSpinner className="text-4xl text-gray-400 animate-spin" />
                  ) : (
                    <>
                      <FaUpload className="text-4xl text-gray-400" />
                      <span className="mt-2 text-sm">Upload NFT Image</span>
                    </>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0], 'nft');
                      }
                    }}
                    required
                  />
                </label>
              ) : (
                <img src={nftImage} alt="NFT" className="absolute object-cover w-full h-full rounded-lg" />
              )}
            </div>
          </div>

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
            <div
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-3 text-white bg-red-600 rounded cursor-pointer"
            >
              <FaTrash />
              <span className="py-2 text-white">Cancel</span>
            </div>

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
