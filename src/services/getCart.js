import axiosInstance from "../../axiosInstance";


export const getCart = async () => {
    await axiosInstance.get("/cart").then((res) => {
        const response = res?.data;
        if (response?.success === true) {
            localStorage.setItem("cart", JSON.stringify(response?.response || []));
        }
    }
    ).catch(() => null);


};
