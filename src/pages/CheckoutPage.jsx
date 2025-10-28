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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const { cartItemsCount } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const shippingAddressData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        addressLine1: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        phone: formData.phoneNumber,
      };

      const orderData = {
        shippingAddress: shippingAddressData,
        paymentMethod: formData.paymentMethod,
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
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={"First Name"}
          />
          <InputCheckout
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={"Last Name"}
          />
          <InputCheckout
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={"Email Address"}
            className={"lg:col-span-2"}
          />
          <InputCheckout
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder={"Address"}
            className={"lg:col-span-2"}
          />
          <InputCheckout
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder={"City"}
          />
          <InputCheckout
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder={"State"}
          />
          <InputCheckout
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder={"Zip Code"}
          />
          <InputCheckout
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder={"Country"}
          />
          <InputCheckout
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
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
            checked={formData.paymentMethod === "stripe"}
            onChange={handleChange}
          />
          <PaymentOption
            imageUrl={imageUrl2}
            name={"paymentMethod"}
            value={"razorpay"}
            checked={formData.paymentMethod === "razorpay"}
            onChange={handleChange}
          />
          <PaymentOption
            name={"paymentMethod"}
            value={"cod"}
            checked={formData.paymentMethod === "cod"}
            onChange={handleChange}
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
