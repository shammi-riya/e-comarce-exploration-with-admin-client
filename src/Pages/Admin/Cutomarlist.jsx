import axios from "axios";
import { useEffect, useState } from "react";


const Cutomarlist = () => {
const [customers,setCustomers] = useState([])


    useEffect(()=>{

        axios.get('http://localhost:5000/all-user')
        .then(res=>{
            setCustomers(res.data)
        })

    },[])



    return (
        <div>
             <table className="table-auto border-collapse border w-full">
                        <thead>
                            <tr className=" bg-gray-100">
                                <th className="py-2">Name</th>
                                <th className="py-2">email</th>
                                <th className="py-2">role</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {customers?.map(customer => (
                                <tr key={customer ._id} className="px-5 border-b text-center">
                                    <td className="py-2 ">{customer?.username}</td>
                                    
                                    <td className="py-2 ">{customer?.email}</td>
                                    <td className="py-2 ">user</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
    );
};

export default Cutomarlist;