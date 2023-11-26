import { isInteger } from "formik";

function validateTitle(value) {
    let error;
    if (!value) {
      error = "Title is Required";
    }
    return error;
  }
  function validateAuthor(value) {
    let error;
    if (!value) {
      error = "Author is Required";
    } 
    return error;
  }
  function validateGenre(value) {
    let error;
    if (!value) {
      error = "Author is Required";
    } 
    return error;
  }
  function validatePrice(value) {
    let error;
    if (!value) {
      error = "Price is Required";
    } else if(value < 0) {
        error = "Price cannot be negetive";
    }else if(!Number.isInteger(value)){
      error = "Enter in number format"
    }
    return error;
  }
export {
    validateTitle,validateAuthor,validateGenre,validatePrice
}
