import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = ({ selectedId }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const [transactionId, setTransactionId] = useState("");
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  // console.log(selectedId.price);

  const PackagePrice = selectedId.price;

  useEffect(() => {
   if(PackagePrice > 0){
    axiosSecure.post("/create-payment-intent", {price:PackagePrice}).then((res) => {
      console.log(res.data);
      setClientSecret(res.data.clientSecret);
    });
   }
  }, [axiosSecure, PackagePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError");
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment saved", res.data);
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for Purchage Package",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/addEmployee");
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "gray",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline  px-4 btn-sm my-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            Your transaction id is : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
