import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CardDetails = () => {
  const { Id } = useParams(); // Use "Id" instead of "_id"
  const [device, setDevice] = useState(null);
  const [assignedUsers, setAssignedUsers] = useState([]);
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

  useEffect(() => {
    const fetchAssignedUsers = async () => {
      try {
        const response = await axiosPublic.get("/users");
        // Extract device number from deviceName
        if (device) {
          const deviceNumber = parseInt(device.deviceName.split("-")[1]);
          const startIndex = (deviceNumber - 1) * 4;
          const endIndex = startIndex + 4;
          let slicedUsers = response.data.slice(startIndex, endIndex);
          // TODO: Change the logic later. update assigned year by year
          // If there are fewer users than expected, concatenate users from the beginning
          while (
            slicedUsers.length < 4 &&
            slicedUsers.length < response.data.length
          ) {
            const remainingUsers = response.data.slice(
              0,
              4 - slicedUsers.length
            );
            slicedUsers = slicedUsers.concat(remainingUsers);
          }
          // console.log(slicedUsers);
          setAssignedUsers(slicedUsers);
        }
      } catch (error) {
        console.error("Error fetching assigned users:", error);
      }
    };

    if (device) {
      fetchAssignedUsers();
    }
  }, [device, axiosPublic]);

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
      <div className="grow pl-10">
        <img src={image} alt="" />
        <div className="text-center my-3">
          <Link to={`/verify/${Id}`}>
            <button className="btn uppercase text-xl font-bold bg-blue-600 w-3/4 text-white px-3">
              Verify
            </button>
          </Link>
        </div>
        <div className="flex gap-6">
          <div className="flex-1">
            <p className="capitalize text-lg">deviceName: {deviceName}</p>
            <p className="capitalize text-lg">brand: {brand}</p>
            <p className="capitalize text-lg">model: {model}</p>
            <p className="capitalize text-lg">image: {image}</p>
            <p className="capitalize text-lg">processor: {processor}</p>
            <p className="capitalize text-lg">
              processorBrand: {processorBrand}
            </p>
            <p className="capitalize text-lg">processorType: {processorType}</p>
            <p className="capitalize text-lg">
              processorModel: {processorModel}
            </p>
            <p className="capitalize text-lg">
              processorBaseFrequency: {processorBaseFrequency}
            </p>
            <p className="capitalize text-lg">processorCore: {processorCore}</p>
            <p className="capitalize text-lg">
              processorThread: {processorThread}
            </p>
            <p className="capitalize text-lg">generation: {generation}</p>
            <p className="capitalize text-lg">RAM: {RAM}</p>
            <p className="capitalize text-lg">
              installedRAMDetails: {installedRAMDetails}
            </p>
          </div>
          <div className="flex-1">
            <p className="capitalize text-lg">RAMType: {RAMType}</p>
            <p className="capitalize text-lg">RAMBus: {RAMBus}</p>
            <p className="capitalize text-lg">totalRAMSlot: {totalRAMSlot}</p>
            <p className="capitalize text-lg">emptyRAMSlot: {emptyRAMSlot}</p>
            <p className="capitalize text-lg">storage: {storage}</p>
            <p className="capitalize text-lg">
              installedHDDType: {installedHDDType}
            </p>
            <p className="capitalize text-lg">
              installedSSDType: {installedSSDType}
            </p>
            <p className="capitalize text-lg">speaker: {speaker}</p>
            <p className="capitalize text-lg">microphone: {microphone}</p>
            <p className="capitalize text-lg">webCam: {webCam}</p>
            <p className="capitalize text-lg">keyboard: {keyboard}</p>
            <p className="capitalize text-lg">mouse: {mouse}</p>
            <p className="capitalize text-lg">
              operatingSystem: {operatingSystem}
            </p>
          </div>
        </div>
      </div>
      {/* assign part  */}
      <div className="bg-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold">Assigned To</h1>
        <ul>
          {assignedUsers.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetails;
