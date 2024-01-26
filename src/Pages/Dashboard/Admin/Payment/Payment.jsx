import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-12">Packages</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/30JT09m/shutterstock-609654-1024x683-jpg.webp"
              alt="team"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Maximum 5 employees $5</h2>
            <p className="text-xl font-semibold">Hey, build your own team.</p>
            <div className="card-actions justify-end">
              <Link to='/dashboard/paymentPage'><button className="btn btn-primary">Pay Now</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/30JT09m/shutterstock-609654-1024x683-jpg.webp"
              alt="team"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Maximum 10 employees $8</h2>
            <p className="text-xl font-semibold">Hey, build your own team.</p>
            <div className="card-actions justify-end">
              <Link to='/dashboard/paymentPage'><button className="btn btn-primary">Pay Now</button></Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/30JT09m/shutterstock-609654-1024x683-jpg.webp"
              alt="team"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Maximum 20 employees $15</h2>
            <p className="text-xl font-semibold">Hey, build your own team.</p>
            <div className="card-actions justify-end">
              <Link to='/dashboard/paymentPage'><button className="btn btn-primary">Pay Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
