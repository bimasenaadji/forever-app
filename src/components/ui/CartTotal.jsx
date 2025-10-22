import React from "react";
import ProductTitle from "./ProductTitle";
import { useCart } from "../../../context/cartContext";

const CartTotal = ({ className }) => {
  const { subtotal, shipping, total } = useCart();
  return (
    <div className={`flex flex-col w-[50%] ${className}`}>
      <ProductTitle word1={"Cart"} word2={"Totals"} />

      <div className="flex justify-between">
        <p className="text-detail-product font-semibold text-base">Subtotal</p>
        {/* Tampilkan data dinamis */}
        <p className="text-checkout-price font-semibold text-base">
          ${subtotal.toLocaleString()}
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-2"></div>

      <div className="flex justify-between">
        <p className="text-detail-product font-semibold text-base">
          Shipping Fee
        </p>
        <p className="text-checkout-price font-semibold text-base">
          ${shipping.toLocaleString()}
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-2"></div>

      <div className="flex justify-between">
        <p className="text-detail-product font-semibold text-base">Total</p>
        <p className="text-checkout-price font-semibold text-base">
          ${total.toLocaleString()}
        </p>
      </div>

      <button className="uppercase py-6 px-28 font-semibold text-base bg-black text-white my-5">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
