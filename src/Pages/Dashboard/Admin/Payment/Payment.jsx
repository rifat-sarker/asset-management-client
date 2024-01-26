import { Link } from "react-router-dom";

const Payment = () => {
  const cards = [
    {
      id: 1,
      maxEmployees: 5,
      price: 5,
    },
    {
      id: 2,
      maxEmployees: 10,
      price: 8,
    },
    {
      id: 3,
      maxEmployees: 20,
      price: 15,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-12">Packages</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img
                src="https://i.ibb.co/30JT09m/shutterstock-609654-1024x683-jpg.webp"
                alt="team"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">
                {`Maximum ${card.maxEmployees} employees $${card.price}`}
              </h2>
              <p className="text-xl font-semibold">Hey, build your own team.</p>
              <div className="card-actions justify-end">
                <Link
                  to={{
                    pathname: `/dashboard/paymentPage/${card.id}`,
                    state: { cards },
                  }}
                >
                  <button className="btn btn-primary">Pay Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;


