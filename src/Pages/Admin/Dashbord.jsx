import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BiCar } from "react-icons/bi";
import {  FiUserPlus, FiUserX } from "react-icons/fi";
import mockOrders from "../../Api/OrderProducts";

const Dashbord = () => {



    const {data:stutus={}} = useQuery({
        queryKey:['admin-stutus'],
        queryFn:async()=>{
            const res= await axios.get('http://localhost:5000/admin-stutus');
            return res.data;
        }
    })








    return (
        <div className="w-[80%] mx-auto my-10">
           < div className="lg:grid-cols-3 gap-7  md:grid-cols-2 text-white grid-cols-1 grid">
             
               
                <div className="p-10 bg-red-400 text-2xl rounded-sm">
                    <div>
                        <FiUserPlus></FiUserPlus>
                    </div>
                <div>
                <h1>Customer</h1>
                <p>{stutus?.userCount}</p>
                </div>
                </div>
             
              < div className="p-10 bg-slate-600 text-2xl rounded-sm">
                <div>
                    <span><FiUserX></FiUserX></span>
                </div>
                <div>
                <h1>Products</h1>
                <p>{stutus?.productCount}</p>
                </div>
              </div>
              <div className="p-10 bg-orange-600 text-2xl rounded-sm">
              <div>
                   <span> <BiCar></BiCar></span>
                </div>
                <h1>Order</h1>
                <p>{mockOrders.length||0}</p>
              </div>
           </div>
        </div>
    );
};

export default Dashbord;