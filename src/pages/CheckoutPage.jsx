import React from "react";
import ProductTitle from "../components/ui/ProductTitle";
import FormInput from "../components/ui/FormInput";
import InputCheckout from "../components/ui/InputCheckout";
import CartTotal from "../components/ui/CartTotal";
import CartButton from "../components/ui/CartButton";
import PaymentOption from "../components/ui/PaymentOption";
import imageUrl1 from "../assets/images/payment1.png";
import imageUrl2 from "../assets/images/payment2.png";
import imageUrl3 from "../assets/images/payment3.png";

const CheckoutPage = () => {
  return (
    <div className="p-2 sm:p-8 md:p-8 xl:16 grid mx-auto lg:grid-cols-2 lg:gap-x-5 xl:gap-x-8">
      <div>
        {" "}
        <ProductTitle
          word1={"Delivery"}
          word2={"Information"}
          className={"justify-center"}
        />
        <form className="grid grid-flow-row gap-y-7 place-items-center sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 ">
          <InputCheckout placeholder={"First Name"} />
          <InputCheckout placeholder={"Last Name"} />
          <InputCheckout
            placeholder={"Email Address"}
            className={"lg:col-span-2"}
          />
          <InputCheckout placeholder={"Address"} className={"lg:col-span-2"} />
          <InputCheckout placeholder={"City"} />
          <InputCheckout placeholder={"State"} />
          <InputCheckout placeholder={"Zip Code"} />
          <InputCheckout placeholder={"Country"} />
          <InputCheckout
            placeholder={"Phone Number"}
            className={"sm:col-span-2 "}
          />
        </form>
      </div>

      <div className="p-2 grid gap-y-3">
        <CartTotal className={"lg:w-full"} title={"justify-center"} />
        <ProductTitle word1={"Payment"} word2={"Method"} />
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-3 sm:gap-x-3 md:gap-x-6 lg:gap-x-2">
          <PaymentOption
            imageUrl={imageUrl1}
            name={"paymentMethod"}
            value={"stripe"}
            // checked={selectedPayment === "stripe"}
            // onChange={handlePaymentChange}
          />
          <PaymentOption
            imageUrl={imageUrl2}
            name={"paymentMethod"}
            value={"razorpay"}
            // checked={selectedPayment === "razorpay"}
            // onChange={handlePaymentChange}
          />
          <PaymentOption
            name={"paymentMethod"}
            value={"cod"}
            // checked={selectedPayment === "cod"}
            // onChange={handlePaymentChange}
          >
            COD
          </PaymentOption>
        </div>
        <CartButton className={"md:w-[60%] lg:w-full"}>Place Order</CartButton>
      </div>
    </div>
  );
};

export default CheckoutPage;
