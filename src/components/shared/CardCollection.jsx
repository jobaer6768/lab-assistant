import PropTypes from "prop-types";

const CardCollection = ({ lab }) => {
  // console.log(lab);
  // Ensure lab object and image property are defined before accessing

  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        {/* Check if imageUrl is provided before rendering image */}
        <img className="md:h-[240px]" src={lab.image} alt="Lab" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{lab.name}</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Visit</button>
        </div>
      </div>
    </div>
  );
};

export default CardCollection;

CardCollection.propTypes = {
  lab: PropTypes.object,
};
