import BinIcon from "../icons/BinIcon";
import CartTotal from "./CartTotal";
import InputCounter from "./InputCounter";
import { useCart } from "../../../context/cartContext";
import { formatRupiah } from "../../../utils/formatCurrency";

const ProductCart = ({ data }) => {
  const { removeItem, updateQuantity } = useCart();
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-y-3">
      {data.items.map(
        (item) =>
          item.product && (
            <article key={item.product._id}>
              <div className="h-[1px] w-full bg-gray-300 lg:col-span-3 my-2"></div>
              <div className="flex gap-x-2 sm:gap-x-3 items-center ">
                <div className="flex flex-1 items-center gap-x-2 sm:gap-x-5">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="font-medium test-base sm:text-[22px]">
                      {item.product.name}
                    </p>
                    <div className="flex items-center gap-x-7">
                      <p className="font-light text-base sm:text-[28px] text-desc">
                        {formatRupiah(item.product.price)}
                      </p>
                      <p className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-center text-sm lg:text-base border leading-[40px] sm:leading-[50px] border-border-input">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <InputCounter
                  initialValue={item.quantity}
                  onChange={(newQuantity) =>
                    updateQuantity(item.product._id, newQuantity, item.size)
                  }
                />

                <button onClick={() => removeItem(item.product._id)}>
                  <BinIcon />
                </button>
              </div>
            </article>
          )
      )}

      <CartTotal className={"place-self-end"} />
    </div>
  );
};

export default ProductCart;
