import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Verify = () => {
  const { Id } = useParams();
  const [deviceDetails, setDeviceDetails] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});
  const [verificationComplete, setVerificationComplete] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      try {
        const response = await axiosPublic.get(`/software/${Id}`);
        const deviceData = response.data;
        // Convert object to array of key-value pairs
        const deviceEntries = Object.entries(deviceData);
        setDeviceDetails(deviceEntries);
        // Initialize checkbox state with all checkboxes unchecked
        const initialCheckboxes = {};
        deviceEntries.forEach(([key]) => {
          initialCheckboxes[key] = false;
        });
        setCheckboxes(initialCheckboxes);
      } catch (error) {
        console.error("Error fetching device details:", error);
      }
    };

    fetchDeviceDetails();
  }, []);

  const toggleCheckbox = (key) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [key]: !prevCheckboxes[key],
    }));
  };

  const handleVerify = () => {
    const allChecked = Object.values(checkboxes).every((value) => value);
    if (allChecked) {
      setVerificationComplete(true);
      alert("Verification Complete");
    } else {
      alert("Please verify all device details.");
    }
  };

  if (deviceDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Device Verification</h2>
      <ul>
        {deviceDetails.map(([key, value]) => (
          <li key={key} className="mb-2">
            <label className="flex items-center">
              {/* Checkbox for each device detail */}
              <input
                type="checkbox"
                checked={!!checkboxes[key]}
                onChange={() => toggleCheckbox(key)}
                className="mr-2"
              />
              {/* Display the correct property values */}
              <span className="font-semibold">{key}:</span> {value}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleVerify}
        disabled={verificationComplete}
        className={`mt-6 py-2 px-4 rounded ${
          verificationComplete
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {verificationComplete ? "Verification Complete" : "Verify Device"}
      </button>
    </div>
  );
};

export default Verify;
