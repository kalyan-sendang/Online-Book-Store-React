import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CheckoutSteps from "../components/CheckoutStep.jsx";

export const ShippingPage = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")


    const submitHandler = () => {
        const shippingAddress = {
            address,
            city,
            state,
            country
        }
        localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
        navigate('/placeorder')
    }
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <CheckoutSteps step1 step2 />
                    <h1>Shipping</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder="Enter City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='postalCode'>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder="Enter State name"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='country'>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder="Enter country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary' style={{ width: "100px", marginTop: "20px" }}>
                            Continue
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
