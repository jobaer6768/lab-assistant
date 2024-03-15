const Banner = () => {
  return (
    <div>
      {/* This Banner section */}
      <div className="w-4/5 container mx-auto my-8">
        <div
          className="hero min-h-screen "
          style={{ backgroundImage: "url(./src/assets/images/banner.webp)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold"> Lab Assistant </h1>
              <p className="mb-5">Track your lab instrument</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
