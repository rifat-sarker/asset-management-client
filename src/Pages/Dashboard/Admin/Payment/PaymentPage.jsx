import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk_key);
const PaymentPage = () => {
  return (
    <div className="w-1/2 mt-12 mx-auto">
      <Elements stripe={stripePromise} >
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
