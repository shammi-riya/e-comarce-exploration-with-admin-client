import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAddCartProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { isLoading, data = [], refetch } = useQuery({
    queryKey: ['my-cart', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/my-cart?email=${user?.email}`);
      
      return response.data; 
    },
  });

  console.log(data);
  return [isLoading, data, refetch];
};

export default useAddCartProducts;
