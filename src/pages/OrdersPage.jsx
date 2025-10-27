import React, { useEffect, useState } from "react";
import ProductTitle from "../components/ui/ProductTitle";
import ProductOrder from "../components/ui/ProductOrder";
import { getOrder } from "../../services/order.service";
import OrderSkeleton from "../components/ui/OrderSkeleton";

const OrdersPage = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await getOrder();
        setOrder(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, []);

  if (loading) {
    return <OrderSkeleton />;
  }
  return (
    <div className="p-5">
      <ProductTitle
        word1={"My"}
        word2={"Orders"}
        className={"justify-center sm:justify-start"}
      />
      <ProductOrder orders={order} />
    </div>
  );
};

export default OrdersPage;
