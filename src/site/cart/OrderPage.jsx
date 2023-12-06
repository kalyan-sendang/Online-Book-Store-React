import { useQuery } from "@tanstack/react-query";

import { Image, ListGroup, Row, Table } from "react-bootstrap";
import { Col } from "reactstrap";
import { getOrdersById } from "../../services/Routes";

function OrderPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => getOrdersById(),
  });

  const orders = data?.data?.response;
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <Row>
        <Col>
          <h1>Your Orders</h1>
          {orders.length === 0 ? (
            <h3>You have not place any order!!!</h3>
          ) : (
            <ListGroup variant="flush">
              {orders.map((order, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src="/src/assets/book1.avif"
                        alt={order?.book?.title}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>Title:{order?.book?.title}</Col>
                    <Col md={2}>Quantity:{order?.qty}</Col>
                    <Col md={2}>Rate: Rs.{order?.book?.price}</Col>
                    <Col md={2}>
                      TotalPrice: Rs.{order?.qty * order?.book?.price}
                    </Col>
                    <Col md={2}>
                      Delivery Date: 3 Days After
                      {order?.shippedTime}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default OrderPage;
