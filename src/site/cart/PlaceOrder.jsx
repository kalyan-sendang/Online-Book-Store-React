import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutStep.jsx";
import axiosInstance from "../../../axiosInstance.js";


function PlaceOrder() {

    const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'));
    const address = JSON.stringify(shippingAddress);
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.itemsPrice = cart?.reduce((acc, item) => acc + item?.book?.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsprice > 100 ? 0 : 10).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice)).toFixed(2)

    console.log(cart)
    const placeOrder = async () => {
        const response = await axiosInstance.post(
            "/orders/placeorder",
            address
        )
        console.log(response)
    }
    return (
        <div>
            <CheckoutSteps step1 step2 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>

                            <p>
                                <strong>Shipping: </strong>
                                {shippingAddress.address},  {shippingAddress.city}
                                {'  '}
                                {shippingAddress.state},
                                {'  '}
                                {shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment</h2>

                            <p>
                                <strong>Method: </strong>
                                ConnectIPS
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>

                            <p>
                                <strong>Shipping: </strong>
                            </p>
                            {cart?.length === 0 ?
                                <h3>Your cart is empty!!!</h3>
                                : (
                                    <ListGroup variant='flush'>
                                        {cart?.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src="/src/assets/book1.avif" alt={item?.title} fluid rounded />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/book/${item.bookId}`} style={{ textDecoration: "none" }}>{item?.book?.title}</Link>
                                                    </Col>

                                                    <Col md={4}>
                                                        {item.qty} X Rs{item?.book?.price} =Rs.{(item.qty * item?.book?.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={4} style={{ marginTop: "50px" }}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items: </Col>
                                    <Col>Rs.{cart?.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>Rs.{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            {/* <ListGroup.Item>
                                <Row>
                                    <Col>Tax: </Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item> */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total Price: </Col>
                                    <Col>Rs.{cart?.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PlaceOrder