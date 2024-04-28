import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddLab = () => {
  const axiosPublic = useAxiosPublic();
  const [labName, setLabName] = useState("");
  const [labImage, setLabImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to add the lab
      await axiosPublic.post("/labs", {
        name: labName,
        image: labImage,
      });
      // Clear input fields after successful submission
      setLabName("");
      setLabImage("");
      // Optionally, you can redirect the user to another page after submission
      // Example: history.push('/labs');
      alert("Lab added successfully!");
    } catch (error) {
      console.error("Error adding lab:", error);
      // Handle error here (e.g., show error message to the user)
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4">Add Lab</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="labName"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="labName"
            value={labName}
            onChange={(e) => setLabName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="labImage"
            className="block text-sm font-medium text-gray-700"
          >
            Image:
          </label>
          <input
            type="text"
            id="labImage"
            value={labImage}
            onChange={(e) => setLabImage(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddLab;
