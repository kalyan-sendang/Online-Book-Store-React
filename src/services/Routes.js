import axiosInstance from "../../axiosInstance";
import { getCart } from "./getCart";

// export const getStarWarsCharacters = async (params) => {
//   const searchParams = new URLSearchParams(params);
//   return axiosInstance.get(`/people?${searchParams.toString()}`);
// };

// export const getStarWarsCharacterById = async (id) => {
//   return axiosInstance.get(`/people/${id}`);
// };

// export const addStarWarsCharacter = async (data) => {
//   return axiosInstance.post(`/people`, data);
// };

// export const updateStarWarsCharacter = async (id, data) => {
//   return axiosInstance.put(`/people/${id}`, data);
// };

export const getBooks = async () => {
  return axiosInstance.get(`/book`);
};

export const getBooksById = async (bookId) => {
  return axiosInstance.get(`/book/${bookId}`);
};
export const getUsers = async () => {
  return axiosInstance.get("/auth/user");
};

export const addToCart = async (bookId, qty) => {
  await axiosInstance.post(`/cart/${bookId}`, qty).then((res) => {
    const response = res?.data
    console.log(response)
    if (response?.statusCode === 201) {
      getCart();
    }
  }
  ).catch(() => "error");


}

export const updateCart = async (cartId, qty) => {
  await axiosInstance.put(`/cart/${cartId}`, qty).then((res) => {
    const response = res?.data
    if (response?.statusCode === 201) {
      getCart();
    }
  }
  ).catch(() => "error");

}


export const deleteCart = async (cartId) => {
  await axiosInstance.delete(`/user/cart/${cartId}`).then((res) => {
    const response = res?.data
    if (response?.statusCode === 200) {
      getCart();
    }
  }
  ).catch(() => null);

}