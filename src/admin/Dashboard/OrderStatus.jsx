import { useState } from "react";

function OrderStatus({ order }) {
  const [status, setStatus] = useState("");

  //api

  return (
    <tr>
      <th>{order?.orderId}</th>
      <td>{order?.book?.bookId}</td>
      <td>{order?.user?.userId}</td>
      <td>{order?.user?.userName}</td>
      <td>{order?.date}</td>
      <td>
        {
          <select
            value={status || order?.status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        }
      </td>
      <td>{order?.shippedTime}</td>
      <td>{order?.price}</td>
      <td>{order?.qty}</td>
      <td>{order?.totalPrice}</td>
      <td className="">
        <button
          onClick={() => {
            // setStatus(orderData?.status);
            // handleUpdate(order?.orderId, orderData?.status);
          }}
          type="button"
          className="btn btn-success"
        >
          Update
        </button>
      </td>
    </tr>
  );
}

export default OrderStatus;
