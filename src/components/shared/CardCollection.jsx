const CardCollection = () => {
  return <div>
    {/* card container */}
    <div className="w-4/5 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
      {/* card 1 */}
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure><img className="md:h-[240px]" src="/src/assets/images/software-lab.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Software Lab</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus inventore distinctio dolorem, nisi iste veritatis! Deserunt quam reiciendis iusto?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Get Information</button>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure><img className="md:h-[240px]" src="/src/assets/images/hardware-lab.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Hardware Lab</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi deleniti distinctio omnis ad, accusamus nihil ab totam blanditiis dolores!</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Get Information</button>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure><img src="/src/assets/images/networking-lab.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Networking Lab</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt aliquid maiores dolores dolorum commodi perferendis illum, perspiciatis ab fugit doloribus?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary ">Get Information</button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CardCollection;
