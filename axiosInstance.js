import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL ?? "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
     Authorization: localStorage.getItem("token") ?? ""
  }
});

// const updateAuthorizationHeader = () => {
//   const token = localStorage.getItem("token") ?? "";
//   axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// // Call the function to set the header initially
// updateAuthorizationHeader();


export default axiosInstance;
