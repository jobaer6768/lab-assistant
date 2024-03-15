import { useEffect, useState } from "react";
import CardCollection from "../../components/shared/CardCollection";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Lab = () => {
  // Fetch lab data from the backend using custom hook
  const axiosPublic = useAxiosPublic();
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/labs")
      .then((response) => {
        // console.log(response.data);
        setLabs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lab data:", error);
      });
  }, [axiosPublic]); // Dependency array includes axiosPublic

  return (
    <div>
      <div className="w-4/5 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Map over the labs data to generate cards */}
        {labs.map((lab) => (
          <CardCollection key={lab._id} lab={lab} />
        ))}
      </div>
    </div>
  );
};

export default Lab;
