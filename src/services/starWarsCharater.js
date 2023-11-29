import axiosInstance from "../../axiosInstance";

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

export const getCart = async () => {
  const response = await axiosInstance.get("/cart").then((res)=>
  res?.data).catch(()=> null);
  console.log(response)
  if(response?.status === 200){
    localStorage.setItem("cart", JSON.stringify(response?.response || []))
  }
}

export const addToCart = async (bookId) => {
  const response = await axiosInstance.post("/cart", bookId).then((res)=>{ res?.data
    console.log("asdfasdf",res?.data)}

  ).catch(()=> "error");
  console.log(response)
  if(response?.status === 200){
    await getCart();
  }
}

export const updateCart = async (cartId, qty ) => {
  const response = await axiosInstance.put(`/cart/${cartId}`,  qty).then((res)=>
  res?.data).catch(()=> "error");
  if(response?.status === 200){
    await getCart();
  }
}


export const deleteCart = async (cartId ) => {
  const response = await axiosInstance.delete(`/user/cart/${cartId}`).then((res)=>
  res?.data).catch(()=> null);
  if(response?.status === 200){
    await getCart();
  }
}