const Card = () => {
  return <div>
    {/* Card */}
    <div className="w-4/5 my-6 container mx-auto flex justify-center">
      <div className="card md:w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="../src/assets/images/Computer.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <h2 className="text-center font-bold">PC No:1</h2>
        <div className="card-body items-center text-center">
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Card;
