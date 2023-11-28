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
export const getUsers = async () => {
  return axiosInstance.get("/auth/user");
};