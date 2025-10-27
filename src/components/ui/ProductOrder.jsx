import BinIcon from "../icons/BinIcon";
import CartTotal from "./CartTotal";
import InputCounter from "./InputCounter";
import { useCart } from "../../../context/cartContext";
import { formatRupiah } from "../../../utils/formatCurrency";
import { formatDate } from "../../../utils/formatDate";

const ProductOrder = ({ data }) => {
  const order = data[0].products;
  const date = data[0].createdAt;
  const status = data[0].status;
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-y-3">
      {order &&
        order.map(
          (item) =>
            item && (
              <article key={item._id}>
                <div className="h-[1px] w-full bg-gray-300 lg:col-span-3 my-2"></div>
                <div className="flex gap-x-2 sm:gap-x-3 items-center ">
                  <div className="flex flex-1 items-center justify-between">
                    <img
                      src={item.productId.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col gap-y-1 sm:gap-y-2">
                      <p className="font-medium text-sm sm:test-base md:text-[22px] text-product">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-x-2 sm:gap-x-7">
                        <p className="font-light text-sm sm:text-base md:text-[28px] text-product">
                          {formatRupiah(item.price)}
                        </p>
                        <p className="font-light text-sm sm:text-base md:text-[28px] text-product">
                          Quantity: {item.quantity}
                        </p>
                        <p className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-center text-sm lg:text-base border leading-[40px] sm:leading-[50px] border-border-input">
                          {item.size}
                        </p>
                      </div>
                      <div>
                        <p className="font-light text-sm sm:text-base md:text-[28px] text-product">
                          Date:{" "}
                          <span className="text-desc">{formatDate(date)}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-1 h-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <p className="font-light text-sm sm:text-base md:text-[28px] text-product">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )
        )}
    </div>
  );
};

export default ProductOrder;
