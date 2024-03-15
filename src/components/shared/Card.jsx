import { Link } from "react-router-dom";

const Card = ({ device }) => {
  const {
    _id,
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
  return (
    <div>
      {/* Card */}
      <div className="w-4/5 my-6 container mx-auto flex justify-center">
        <div className="card md:w-96  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt={deviceName} className="rounded-xl" />
          </figure>
          <h2 className="text-center font-bold">{deviceName}</h2>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <Link to={`/software/${_id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
