import { useEffect, useState } from "react";
import "../../styles/styles.css";
import axiosInstance from "../../../axiosInstance.js";
import { Field, Form, Formik } from "formik";
import { Label } from "reactstrap";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../validation/userFormValidation.js";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const fetchUser = async () => {
    await axiosInstance.get(`/user/${id}`).then((response) => {
      setUserForm((prev) => ({ ...prev, ...response?.data?.response }));
    });
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const formikSubmit = async (value, action) => {
    const response = await axiosInstance
      .put(`/user/${id}`, value)
      .then(() => navigate("/admin/user"))
      .catch((err) => err);
    console.log("response", response);
  };
  return (
    <div className="name">
      <div>
        <h1>Update User</h1>
        <br></br>
        <Formik
          initialValues={userForm}
          onSubmit={formikSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <Label>UserName</Label>
                <Field
                  className="form-control"
                  name="username"
                  type="text"
                  validate={validateUsername}
                />
                {errors.userName && touched.userName && (
                  <div style={{ color: "red" }}>{errors.userName}</div>
                )}
              </div>
              <div className="form-group">
                <Label>Email</Label>
                <Field
                  className="form-control"
                  name="email"
                  type="text"
                  validate={validateEmail}
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </div>
              <div>
                <Label>Password</Label>
                <Field
                  className="form-control"
                  name="password"
                  type="text"
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </div>
              <div>
                <Label>Roles: </Label>
                <Field
                  className="form-control"
                  as="select"
                  name="role"
                  value={userForm.role}
                >
                  <option value="USER">USER</option>
                  <option value="INTERN">INTERN</option>
                  <option value="ADMIN">ADMIN</option>
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
export default UpdateUser;
