import React from "react";
import ProductTitle from "./ProductTitle";
import { useCart } from "../../../context/cartContext";
import { formatRupiah } from "../../../utils/formatCurrency";
import CartButton from "./CartButton";

const CartTotal = ({ className, children, title }) => {
  const { subtotal, shipping, total } = useCart();
  return (
    <div className={`flex flex-col w-full sm:w-full md:w-[60%] ${className}`}>
      <ProductTitle word1={"Cart"} word2={"Totals"} className={title} />

      <div className="flex justify-between">
        <p className="text-detail-product font-semibold text-base">Subtotal</p>

        <p className="text-checkout-price font-semibold text-base">
          {formatRupiah(subtotal)}
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-2"></div>

      <div className="flex justify-between">
        <p className="text-detail-product font-semibold text-base">
          Shipping Fee
        </p>
        <p className="text-checkout-price font-semibold text-base">
          {formatRupiah(shipping)}
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-2"></div>

      <div className="flex justify-between">
        <p className="text-detail-product font-semibold text-base">Total</p>
        <p className="text-checkout-price font-semibold text-base">
          {formatRupiah(total)}
        </p>
      </div>
      {children}
    </div>
  );
};

export default CartTotal;
