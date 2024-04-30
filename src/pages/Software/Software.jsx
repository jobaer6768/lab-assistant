import { useEffect, useState } from "react";
import Card from "../../components/shared/Card";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Software = () => {
  const [devices, setDevices] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch data from software route
    axiosPublic
      .get("/software")
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching software data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center my-4 font-bold my-6">
        Devices Present
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Display cards for each device */}
        {devices.map((device) => (
          <Card key={device._id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default Software;
