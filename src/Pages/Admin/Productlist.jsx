import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";


const Productlist = () => {
const {user} = useContext(AuthContext)
const [productList,setProductList] = useState([])
const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(()=>{
         axios.get(`http://localhost:5000/product-list?email=${user?.email}`)
         .then(res=>{
            setProductList(res.data);
         })

    },[user])


// Function to open the modal and set the selected product
const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };







    return (
        <div className="lg:w-[80%]   mx-auto bg-white border-2 border-[#feda00] z-40 shadow-xl p-5 absolute right-14 top-0 my-24">
    <div className="overflow-x-auto"> 
        <table className="sm:scroll-mx-4 table-auto border-collapse border w-full">
            <thead>
                <tr className="px-5 bg-gray-100">
                    <th className="py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">Name</th>
                    <th className="py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">Image</th>
                    <th className="py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">Price</th>
                    <th className="py-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">productCode</th>
                </tr>
            </thead>
            <tbody>
                {productList?.map(product => (
                    <tr key={product._id} className="px-5 border-b text-center">
                        <td className="py-2 px-2">{product?.name.slice(0, 10)}</td>
                        <td className="py-2 px-2 flex justify-center items-center"><img className="h-14 w-14" src={product?.img} alt="" /></td>
                        <td className="py-2 px-2">${product?.price}</td>
                       
                        <td className="py-2 px-2"><button className="bg-slate-600 py-3 px-3 text-white rounded-sm" onClick={() => openModal(product)}>details</button></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>


       
    </div>
    {selectedProduct && (
        <div className="fixed inset-0 border-2 border-yellow-200 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 max-w-4xl">
            <p>Tax: {selectedProduct?.tax}</p>
            <p>Extra Tax: {selectedProduct?.extraTax}</p>
            <p>Product Code: {selectedProduct?.productCode}</p>
            <p>Product strock: {selectedProduct?.stock?"true":"false"}</p>
            <p>Product quintity: {selectedProduct?.quantity}</p>
            <p>Product brand: {selectedProduct?.brand}</p>
            <button className="mt-4 bg-red-600 px-4 py-2" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    );
};

export default Productlist;