import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { useQuery } from "@tanstack/react-query";
import { getBooksById } from '../../services/starWarsCharater';

const BookPage = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["getBooks"],
        queryFn: () => getBooksById(id),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const book = data?.data?.response;

    return (
        <div className='container'>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

            <Row>
                <Col md={6}>
                    <Image src="/src/assets/book1.avif" alt={book.title} fluid />
                </Col>


                <Col md={3}>
                    <ListGroup >
                        <ListGroup.Item>
                            <h3>{book.title}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {/* <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} /> */}
                            <p style={{ color: "#696969" }}>4.5 from 10 reviews</p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {/* Price: ${product.price} */}
                            <p>Rs 200</p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: <p>It is a very good book to read.</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        {/* <strong>${product.price}</strong> */}
                                        <strong><p>Rs 200</p></strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {/* {book.countInStock > 0 ? 'In Stock' : 'Out of Stock'} */}
                                        In Stock
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    className='btn-block'
                                    type='button'>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div >
    );


}


export default BookPage