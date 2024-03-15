import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import imgg from '../../assets/images/Computer.jpg'

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
    <div className="flex">
      {/* left part  */}
      <div className="grow">
        <img src={imgg} alt="" />
        <p className="capitalize text-lg">deviceName: {deviceName}</p>
        <p className="capitalize text-lg">brand: {brand}</p>
        <p className="capitalize text-lg">model: {model}</p>
        <p className="capitalize text-lg">image: {image}</p>
        <p className="capitalize text-lg">processor: {processor}</p>
        <p className="capitalize text-lg">processorBrand: {processorBrand}</p>
        <p className="capitalize text-lg">processorType: {processorType}</p>
        <p className="capitalize text-lg">processorModel: {processorModel}</p>
        <p className="capitalize text-lg">processorBaseFrequency: {processorBaseFrequency}</p>
        <p className="capitalize text-lg">processorCore: {processorCore}</p>
        <p className="capitalize text-lg">processorThread: {processorThread}</p>
        <p className="capitalize text-lg">generation: {generation}</p>
        <p className="capitalize text-lg">RAM: {RAM}</p>
        <p className="capitalize text-lg">installedRAMDetails: {installedRAMDetails}</p>
        <p className="capitalize text-lg">RAMType: {RAMType}</p>
        <p className="capitalize text-lg">RAMBus: {RAMBus}</p>
        <p className="capitalize text-lg">totalRAMSlot: {totalRAMSlot}</p>
        <p className="capitalize text-lg">emptyRAMSlot: {emptyRAMSlot}</p>
        <p className="capitalize text-lg">storage: {storage}</p>
        <p className="capitalize text-lg">installedHDDType: {installedHDDType}</p>
        <p className="capitalize text-lg">installedSSDType: {installedSSDType}</p>
        <p className="capitalize text-lg">speaker: {speaker}</p>
        <p className="capitalize text-lg">microphone: {microphone}</p>
        <p className="capitalize text-lg">webCam: {webCam}</p>
        <p className="capitalize text-lg">keyboard: {keyboard}</p>
        <p className="capitalize text-lg">mouse: {mouse}</p>
        <p className="capitalize text-lg">operatingSystem: {operatingSystem}</p>
        
    

      </div>
      {/* assign part  */}
      <div className="bg-blue-400 text-white p-4">
        <h1 className="text-4xl font-bold">Assign To</h1>
      </div>
    </div>
  );
};

export default CardDetails;
