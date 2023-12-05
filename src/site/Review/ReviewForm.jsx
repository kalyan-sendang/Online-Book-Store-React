/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";

const ReviewForm = ({ bookId, prevReview, setReviews, setEditModel }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const res = await axiosInstance.post("/review", {
      bookId,
      rating,
      comment,
    });

    const response = JSON.parse(JSON.stringify(res));

    if (response?.data?.success) {
      window.alert("Added!!!");
      setReviews(response?.data?.response);
      setEditModel && setEditModel(false);
    } else {
      window.alert("Error");
    }
  };

  useEffect(() => {
    if (prevReview) {
      setComment(prevReview?.comment);
      setRating(prevReview?.rating);
    }
  }, [prevReview]);

  return (
    <div className="container">
      <div className="form-group m-2 rounded-1 ">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            type="button"
            className={`btn btn-lg text-dark me-1  ${
              rating >= num ? "bg-warning" : ""
            }`}
          >
            <i className="fa-regular fa-star fa-fade fa-lg"></i>
          </button>
        ))}
        <div className="d-flex justify-content-between align-items-center mt-2  ">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Write a review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
