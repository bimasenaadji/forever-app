import React, { useState } from "react";
import ProductTitle from "../components/ui/ProductTitle";
import InputCheckout from "../components/ui/InputCheckout";
import CartTotal from "../components/ui/CartTotal";
import CartButton from "../components/ui/CartButton";
import PaymentOption from "../components/ui/PaymentOption";
import imageUrl1 from "../assets/images/payment1.png";
import imageUrl2 from "../assets/images/payment2.png";
import { createOrder } from "../../services/order.service";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useCart } from "../../context/cartContext";

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { cartItemsCount } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const shippingAddressData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        addressLine1: address,
        city: city,
        state: state,
        zipCode: zipCode,
        country: country,
        phone: phoneNumber,
      };

      const orderData = {
        shippingAddress: shippingAddressData,
        paymentMethod: selectedPayment,
      };

      await createOrder(orderData);
      setLoading(false);
      toast.success("Order placed successfully!");
      navigate("/orders");
    } catch (error) {
      setError(error.message || "Failed to create order");
      setLoading(false);
      toast.error(error.message || "Failed to create order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="p-2 sm:p-8 md:p-8 xl:16 grid mx-auto lg:grid-cols-2 lg:gap-x-5 xl:gap-x-8"
      onSubmit={handleSubmit}
    >
      <div>
        {" "}
        <ProductTitle
          word1={"Delivery"}
          word2={"Information"}
          className={"justify-center"}
        />
        <div className="grid grid-flow-row gap-y-7 place-items-center sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 ">
          <InputCheckout
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={"First Name"}
          />
          <InputCheckout
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={"Last Name"}
          />
          <InputCheckout
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email Address"}
            className={"lg:col-span-2"}
          />
          <InputCheckout
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={"Address"}
            className={"lg:col-span-2"}
          />
          <InputCheckout
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={"City"}
          />
          <InputCheckout
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={"State"}
          />
          <InputCheckout
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder={"Zip Code"}
          />
          <InputCheckout
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder={"Country"}
          />
          <InputCheckout
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={"Phone Number"}
            className={"sm:col-span-2 "}
          />
        </div>
      </div>

      <div className="p-2 grid gap-y-3">
        <CartTotal className={"lg:w-full"} title={"justify-center"} />
        <ProductTitle word1={"Payment"} word2={"Method"} />
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-3 sm:gap-x-3 md:gap-x-6 lg:gap-x-2">
          <PaymentOption
            imageUrl={imageUrl1}
            name={"paymentMethod"}
            value={"stripe"}
            checked={selectedPayment === "stripe"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <PaymentOption
            imageUrl={imageUrl2}
            name={"paymentMethod"}
            value={"razorpay"}
            checked={selectedPayment === "razorpay"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <PaymentOption
            name={"paymentMethod"}
            value={"cod"}
            checked={selectedPayment === "cod"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          >
            COD
          </PaymentOption>
        </div>
        <CartButton
          type="submit"
          className={"md:w-[60%] lg:w-full"}
          disabled={cartItemsCount === 0}
        >
          Place Order
        </CartButton>
      </div>
    </form>
  );
};

export default CheckoutPage;
