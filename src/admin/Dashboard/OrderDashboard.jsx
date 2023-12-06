import { Table } from "reactstrap";
import { getOrders } from "../../services/Routes";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OrderStatus from "./OrderStatus";

const OrderDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => getOrders(),
  });

  const orders = data?.data?.response;
  console.log(orders);

  const [orderData, setOrderData] = useState("");

  useEffect(() => {
    if (orders) {
      setOrderData(orders);
    }
  }, [orders]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>orderId</th>
            <th>bookId</th>
            <th>userId</th>
            <th>BookName</th>
            <th>Ordered At</th>
            <th>status</th>
            <th>shippingAddress</th>
            <th>shippedTime</th>
            <th>price</th>
            <th>quantity</th>
            <th>totalPrice</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, idx) => (
            // different compo
            <OrderStatus key={idx} order={order} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDashboard;
