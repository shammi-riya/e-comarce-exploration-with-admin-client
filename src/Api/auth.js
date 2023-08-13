import axios from "axios";
import { toast } from "react-toastify";

export const saveUser = (user) => {
    const currentUser = {
        email: user?.email,
        username:user?.displayName
    };

    axios
        .put(`http://localhost:5000/save-user/${currentUser?.email}`, currentUser)
        .then((res) => {
            console.log(res.data);
            if(res.data){
                toast.success(`welcome ${currentUser.username}`)
            }
        })
        .catch((error) => {
            console.error("Error updating user:", error);
        });
};
