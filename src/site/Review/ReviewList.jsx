/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";

const ReviewList = ({
  reviews,
  setReviews,
  profile,
  bookId,
  setAverageRating,
  setTotalNumRating,
}) => {
  const [reviewList, setReviewList] = useState([]);
  const [prevReview, setPrevReview] = useState("");

  const [editModel, setEditModel] = useState(false);

  const handleReviews = () => {
    let totalNumRate = 0;
    let totalRate = 0;

    let otherReviews = [];

    reviews?.forEach((review) => {
      totalNumRate += 1;
      totalRate += review?.rating;
      if (review?.userId === profile?.userId) {
        setPrevReview(review);
      } else {
        otherReviews.push(review);
      }
    });

    setReviewList(otherReviews);
    setAverageRating(totalRate / totalNumRate);
    setTotalNumRating(totalNumRate);
  };

  useEffect(() => {
    if (reviews) handleReviews();
  }, [reviews]);

  return (
    <div className="container-fluid px-1 mx-auto">
      <br></br>
      <h4 className="ms-2">Rating and Reviews</h4>
      {/* <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center">
          <div className="card-c">
            <div className="row justify-content-left d-flex">
              <div className="col-md-4 d-flex flex-column">
                <div className="rating-box">
                  <h1 className="pt-4">{averageRating.toFixed(2)}</h1>
                  <p className="">out of 5</p>
                </div>
                <div>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-active mx-1"></span>
                  <span className="fa fa-star star-inactive mx-1"></span>
                  <span>{`(${totalNumRating})`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {prevReview ? (
        <div>
          <button
            style={{ marginTop: "10px" }}
            type="button"
            onClick={() => setEditModel(true)}
            className="btn btn-primary ms-2"
          >
            Edit Your Review
          </button>
          {editModel ? (
            <ReviewForm
              bookId={bookId}
              prevReview={prevReview}
              setReviews={(data) => setReviews([...reviewList, data])}
              setEditModel={setEditModel}
            />
          ) : (
            <div className="col-sm-10 border border-success rounded-1 mt-4">
              <ReviewCard review={prevReview} />
            </div>
          )}
        </div>
      ) : (
        <>
          {profile && (
            <ReviewForm
              bookId={bookId}
              setReviews={(data) => setReviews([...reviewList, data])}
            />
          )}
        </>
      )}

      <div className="col-sm-10">
        {/* <div className="review-block"> */}
        {reviewList &&
          reviewList?.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ReviewList;
