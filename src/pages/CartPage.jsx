import React from "react";
import ProductTitle from "../components/ui/ProductTitle";
import ProductCart from "../components/ui/ProductCart";
import { useCart } from "../../context/cartContext";

const CartPage = () => {
  const { cart, loading } = useCart();

  if (loading) {
    return <div className="p-10">Loading your cart...</div>;
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="p-10 grid gap-y-5">
        <ProductTitle
          word1={"Your"}
          word2={"Cart"}
          className={"justify-start"}
        />
        <p className="mt-4">Your cart is empty.</p>
      </div>
    );
  }
  return (
    <div className="p-3 sm:p-10 grid gap-y-5">
      <ProductTitle word1={"Your"} word2={"Cart"} className={"justify-start"} />

      <ProductCart cart={cart} />
    </div>
  );
};

export default CartPage;
