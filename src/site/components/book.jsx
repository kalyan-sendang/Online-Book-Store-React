
// import Rating from './Rating'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Book({ book }) {
    return (
        <Card className="my-3 p-3 rounded ">

            <Link to={`/book/${book.id}`}>
                <Card.Img src={"/src/assets/book1.avif"} />
            </Link>

            <Card.Body>

                <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                    <Card.Title as="div">
                        <strong>{book.title}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className='my-3'>
                        {/* <Rating value={book.rating} text={`${book.numReviews}reviews`} color={`#f8e825`} /> */}
                        <p style={{ color: "#696969" }}>4.5 from 10 reviews</p>
                    </div>

                </Card.Text>

                <Card.Text as="h3">
                    {/* ${product.price} */}
                    <p>Rs 200</p>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Book