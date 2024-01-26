import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk_key);
const PaymentPage = () => {
  const {id} = useParams();
  console.log(id);
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

 const selectedId=  cards.find(card => card.id == id)
 console.log(selectedId);

  return (
    <div className="w-1/2 mt-12 mx-auto">
      <Elements stripe={stripePromise} >
        <CheckoutForm selectedId={selectedId}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
