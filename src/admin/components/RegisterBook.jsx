import { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const RegisterBook = () => {
  const navigate = useNavigate();

  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    available: false,
  });

  const formikSubmit = async (value, action) => {
    await axiosInstance.post("/book", value).then(() =>
      console
        .log(value)
        //  navigate("/admin/book"))
        .catch((err) => err)
    );
  };
  return (
    <div className="name">
      <div>
        <h1>Book Registration</h1>
        <br></br>
        <Formik initialValues={bookForm} onSubmit={formikSubmit}>
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
                <Label>Available</Label>
                <Field className="form-control" as="select" name="available">
                  <option value={true}>true</option>
                  <option value={false}>false</option>
                </Field>
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

export default RegisterBook;
