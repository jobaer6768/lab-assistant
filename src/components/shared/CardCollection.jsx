import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardCollection = ({ lab }) => {
  // console.log(lab);
  // Ensure lab object and image property are defined before accessing

  if (lab.name === "Software Lab") {
    return (
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          {/* Check if imageUrl is provided before rendering image */}
          <img className="md:h-[240px]" src={lab.image} alt="Lab" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{lab.name}</h2>
          <div className="card-actions justify-center">
            <Link to="/software">
              <button className="btn btn-primary">Visit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (lab.name === "Hardware Lab") {
    return (
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          {/* Check if imageUrl is provided before rendering image */}
          <img className="md:h-[240px]" src={lab.image} alt="Lab" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{lab.name}</h2>
          <div className="card-actions justify-center">
            <Link to="/hardware">
              <button className="btn btn-primary">Visit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (lab.name === "Networking Lab") {
    return (
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          {/* Check if imageUrl is provided before rendering image */}
          <img className="md:h-[240px]" src={lab.image} alt="Lab" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{lab.name}</h2>
          <div className="card-actions justify-center">
            <Link to="/networking">
              <button className="btn btn-primary">Visit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default CardCollection;

CardCollection.propTypes = {
  lab: PropTypes.object,
};
