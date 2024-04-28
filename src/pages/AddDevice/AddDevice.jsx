import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddDevice = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    deviceName: "",
    brand: "",
    model: "",
    processorBrand: "",
    processorType: "",
    generation: "",
    processorModel: "",
    processorBaseFrequency: "",
    processorCore: "",
    processorThread: "",
    RAM: "",
    installedRAMDetails: "",
    RAMType: "",
    RAMBus: "",
    totalRAMSlot: "",
    emptyRAMSlot: "",
    storage: "",
    installedHDDType: "",
    installedSSDType: "",
    speaker: "",
    microphone: "",
    webCam: "",
    keyboard: "",
    mouse: "",
    operatingSystem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to add the device
      await axiosPublic.post("/software", formData);
      // Clear form fields after successful submission
      setFormData({
        deviceName: "",
        brand: "",
        model: "",
        processorBrand: "",
        processorType: "",
        generation: "",
        processorModel: "",
        processorBaseFrequency: "",
        processorCore: "",
        processorThread: "",
        RAM: "",
        installedRAMDetails: "",
        RAMType: "",
        RAMBus: "",
        totalRAMSlot: "",
        emptyRAMSlot: "",
        storage: "",
        installedHDDType: "",
        installedSSDType: "",
        speaker: "",
        microphone: "",
        webCam: "",
        keyboard: "",
        mouse: "",
        operatingSystem: "",
      });
      alert("Device added successfully!");
    } catch (error) {
      console.error("Error adding device:", error);
      // Handle error here (e.g., show error message to the user)
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
      <form
        onSubmit={handleSubmit}
        className="col-span-4 md:col-span-3 sm:col-span-2"
      >
        {/* Input fields */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Device Name</span>
          </div>
          <input
            type="text"
            name="deviceName"
            value={formData.deviceName}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Brand</span>
          </div>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Model</span>
          </div>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Processor Brand</span>
          </div>
          <input
            type="text"
            name="processorBrand"
            value={formData.processorBrand}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Processor Type</span>
          </div>
          <input
            type="text"
            name="processorType"
            value={formData.processorType}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Generation</span>
          </div>
          <input
            type="text"
            name="generation"
            value={formData.generation}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Processor Model</span>
          </div>
          <input
            type="text"
            name="processorModel"
            value={formData.processorModel}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Processor Base Frequency</span>
          </div>
          <input
            type="text"
            name="processorBaseFrequency"
            value={formData.processorBaseFrequency}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Processor Core</span>
          </div>
          <input
            type="text"
            name="processorCore"
            value={formData.processorCore}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Generation</span>
          </div>
          <input
            type="text"
            name="generation"
            value={formData.generation}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">RAM</span>
          </div>
          <input
            type="text"
            name="RAM"
            value={formData.RAM}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Installed RAM Details</span>
          </div>
          <input
            type="text"
            name="installedRAMDetails"
            value={formData.installedRAMDetails}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">RAM Type</span>
          </div>
          <input
            type="text"
            name="RAMType"
            value={formData.RAMType}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Image</span>
          </div>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Type here"
          />
        </label>

        {/* Submit button */}
        <button type="submit" className="btn btn-success my-auto">
          Add Device
        </button>
      </form>
    </div>
  );
};

export default AddDevice;
