import axiosInstance from "../../axiosInstance";


export const getCart = async () => {
    await axiosInstance.get("/cart").then((res) => {
        const response = res?.data;
        console.log("status", response?.statusCode)
        if (response?.statusCode === 200) {
            localStorage.setItem("cart", JSON.stringify(response?.response || []));
            const cart = localStorage.getItem("cart")
            console.log("cart", cart)
        }
    }
    ).catch(() => null);


};
