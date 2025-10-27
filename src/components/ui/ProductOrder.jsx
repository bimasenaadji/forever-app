import { formatRupiah } from "../../../utils/formatCurrency";
import { formatDate } from "../../../utils/formatDate";

const ProductOrder = ({ orders }) => {
  console.log(orders);
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-y-3">
      {orders.map((order) => (
        <article key={order._id} className="border border-input p-4">
          <div className="flex justify-between items-center mb-4 text-product ">
            <div>
              <p className="font-bold">Order Date:</p>
              <p>{formatDate(order.createdAt)}</p>
            </div>
            <div>
              <p className="font-bold">Status:</p>
              <p className="text-emerald-600">{order.status}</p>
            </div>
            <div>
              <p className="font-bold">Total:</p>
              <p>{formatRupiah(order.totalAmount)}</p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-gray-300 my-2"></div>

          {order.products.map((item) => (
            <div key={item._id} className="flex gap-x-4 items-center my-4">
              <img
                src={item.productId.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover "
              />

              <div className="flex-1">
                <p className="font-medium text-product">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x {formatRupiah(item.price)}
                </p>
              </div>

              <p className="w-12 h-12 leading-[48px] text-center border text-product border-input">
                {item.size}
              </p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default ProductOrder;
