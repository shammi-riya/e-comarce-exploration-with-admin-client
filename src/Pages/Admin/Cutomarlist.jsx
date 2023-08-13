import axios from "axios";
import { useEffect, useState } from "react";


const Cutomarlist = () => {
const [allUser,setAllUser] = useState([])


    useEffect(()=>{

        axios.get('http://localhost:5000/all-user')
        .then(res=>{
            setAllUser(res.data)
        })

    },[])


    const customerList = allUser.filter(user=>user.role=="customer")

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
                            {customerList?.map(customer => (
                                <tr key={customer ._id} className="px-5 border-b text-center">
                                    <td className="py-2 ">{customer?.username}</td>
                                    
                                    <td className="py-2 ">{customer?.email}</td>
                                    <td className="py-2 ">{customer?.role}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
    );
};

export default Cutomarlist;