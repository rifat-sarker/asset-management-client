const Package = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold my-12">Available Packages</h1>
      <div className="my-12  grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card max-h-80 w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src="https://i.ibb.co/VBr0dQn/dreamstime-l-68294946.jpg"
              alt="team"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Maximum 5 employees $5</h2>
          </div>
        </div>
        <div className="card max-h-80 w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src="https://i.ibb.co/tBqjn46/Team-building-promotes-teamwork-which-fosters-success-in-a-business-Here-is-how-and-why-you-should-b.jpg"
              alt="team"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Maximum 10 employees $8</h2>
          </div>
        </div>
        <div className="card max-h-80 w-96 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src="https://i.ibb.co/6mJpWRs/team.jpg"
              alt="team"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Maximum 20 employees $15</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
