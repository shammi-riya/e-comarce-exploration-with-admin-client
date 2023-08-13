
import { toast } from "react-toastify";
import useAxiosSecure from "./useAxiosSecure";

export const AddtoCart = (productInfo, refetch) => {
    const axiosSecure = useAxiosSecure();
    axiosSecure.post(`/add-cart`, productInfo)
    .then(res => {
        if (res.data) {
            toast.success('Item added to cart!', {
                position: toast.POSITION.TOP_RIGHT
            });
            refetch();
        }
    })
    .catch(error => {
        console.error("Error adding item to cart:", error);
    });
};
