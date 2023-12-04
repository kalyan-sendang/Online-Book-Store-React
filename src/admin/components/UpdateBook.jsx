import { useEffect, useState } from "react";
import "../../styles/styles.css";
import axiosInstance from "../../../axiosInstance.js";
import { Field, Form, Formik } from "formik";
import { Label } from "reactstrap";
import {
  validateTitle,
  validateAuthor,
  validateGenre,
  validatePrice,
} from "../../validation/bookFormValidation.js";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    available: false,
  });
  const fetchBook = async () => {
    await axiosInstance.get(`/book/${id}`).then((response) => {
      setBookForm(response?.data?.response);
    });
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  const formikSubmit = async (value, action) => {
    const response = await axiosInstance
      .put(`/auth/book/${id}`, value)
      .then(() => {
        navigate("/admin/book");
      })
      .catch((err) => err);
    console.log(response);
  };
  return (
    <div className="name">
      <div>
        <h1>Update Book</h1>
        <br></br>
        <Formik
          initialValues={bookForm}
          onSubmit={formikSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <Label>Title</Label>
                <Field
                  className="form-control"
                  name="title"
                  type="text"
                  validate={validateTitle}
                />
                {errors.title && touched.title && (
                  <div style={{ color: "red" }}>{errors.title}</div>
                )}
              </div>
              <div className="form-group">
                <Label>Author</Label>
                <Field
                  className="form-control"
                  name="author"
                  type="text"
                  validate={validateAuthor}
                />
                {errors.author && touched.author && (
                  <div style={{ color: "red" }}>{errors.author}</div>
                )}
              </div>
              <div>
                <Label>Genre</Label>
                <Field
                  className="form-control"
                  name="genre"
                  type="text"
                  validate={validateGenre}
                />
                {errors.genre && touched.genre && (
                  <div style={{ color: "red" }}>{errors.genre}</div>
                )}
              </div>
              <div>
                <Label>Price</Label>
                <Field
                  className="form-control"
                  name="price"
                  type="number"
                  validate={validatePrice}
                />
                {errors.price && touched.price && (
                  <div style={{ color: "red" }}>{errors.price}</div>
                )}
              </div>
              <div>
                <Label>Quantity</Label>
                <Field
                  className="form-control"
                  name="qty"
                  type="number"
                  // validate={validatePrice}
                />
                {/* {errors.price && touched.price && (
                  <div style={{ color: "red" }}>{errors.price}</div>
                )} */}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateBook;
