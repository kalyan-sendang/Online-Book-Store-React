import Rating from "./Rating";

/* eslint-disable react/prop-types */
const ReviewCard = ({ review }) => {
  return (
    <div className="row review-block ms-2 mt-4">
      <div className="col-sm-3">
        {/* <img
          src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
          className="img-rounded"
        /> */}
        <i className="fa-solid fa-user fa-lg"></i>
        <div className="">
          <p>{review?.username}</p>
        </div>
      </div>
      <div className="col-sm-9">
        <div className="review-block-rate">
          {/* {[1, 2, 3, 4, 5].map((item) => (
            <span
              key={item}
              className={`fas fa-star ${
                review?.rating >= item ? "star-active" : "star-inactive"
              } mx-1`}
            ></span>
          ))} */}
          <Rating value={review?.rating} text={review?.rating} />
        </div>
        <div className="review-block-date">
          {new Date(review?.date).toLocaleString()}
        </div>
        <h5>{review?.comment}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
