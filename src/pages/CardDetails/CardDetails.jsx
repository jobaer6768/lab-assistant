import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CardDetails = () => {
  const { Id } = useParams(); // Use "Id" instead of "_id"
  const [device, setDevice] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Function to fetch device details by ID
    const fetchDeviceDetails = async () => {
      try {
        // Make API request to fetch device details by ID
        const response = await axiosPublic.get(`/software/${Id}`);
        // Set the fetched device details in state
        setDevice(response.data);
      } catch (error) {
        console.error("Error fetching device details:", error);
      }
    };

    // Call the fetchDeviceDetails function when the component mounts
    fetchDeviceDetails();
  }, [Id]); // Include Id in the dependency array to re-fetch when it changes

  // Render loading indicator if device details are being fetched
  if (!device) {
    return <div>Loading...</div>;
  }

  const {
    deviceName,
    brand,
    model,
    image,
    processor,
    processorBrand,
    processorType,
    processorModel,
    processorBaseFrequency,
    processorCore,
    processorThread,
    generation,
    RAM,
    installedRAMDetails,
    RAMType,
    RAMBus,
    totalRAMSlot,
    emptyRAMSlot,
    storage,
    installedHDDType,
    installedSSDType,
    speaker,
    microphone,
    webCam,
    keyboard,
    mouse,
    operatingSystem,
  } = device;

  // Render device details once fetched
  return (
    <div>
      {/* Display details of the selected device */}
      <h1>Card Details for Device ID: {Id}</h1>
      {/* Render device details */}
      {/* Example: */}
      <p>Device Name: {deviceName}</p>
      <p>Brand: {brand}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default CardDetails;
