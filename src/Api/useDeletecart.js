import axios from "axios";
import { toast } from "react-toastify";

const useDeletecart = () => {

    const deleteCartItem = async (id, refetch) => {
        try {
            const response = await axios.delete(`http://localhost:5000/delete-cart/${id}`);
            if (response.data) {
                toast('Product deleted successfully');
                console.log(response.data);
                refetch();
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return deleteCartItem;
};
   



export default useDeletecart;