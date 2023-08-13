
import useAddCartProducts from "../../Api/useAddCartProducts";

import useDeletecart from "../../Api/useDeletecart";


const Viewcart = () => {


    const [, data, refetch] = useAddCartProducts();
     const deleteCartItem = useDeletecart()


    const handleDelete = (id) => {
        deleteCartItem(id,refetch)
    }
    


    const totalPrice = data.reduce((total, product) => total + product.price, 0);



    return (
        <div>
            <div  className="w-full text-center max-w-7xl mx-auto bg-white border-2 border-[#feda00] z-40 shadow-sm p-5  my-24">
                    <table className="table-auto border-collapse border w-full">
                        <thead>
                            <tr className="px-5 bg-gray-100">
                                <th className="py-2 px-2">Action</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Image</th>
                                <th className="py-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(product => (
                                <tr key={product?._id} className="px-5 border-b ">
                                    <td className=" px-2 py-2 "><span onClick={()=>handleDelete(product._id)}>X</span></td>
                                    <td className="py-2 px-2">{product?.name.slice(0, 10)}</td>
                                    <td className="py-2 px-2 flex justify-center items-center"><img className="h-32 w-32" src={product?.img} alt="" /></td>
                                    <td className="py-2 px-2">{product?.price}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  <div className="flex justify-end pr-16 my-4">
                    <h3 className="text-lg font-bold">Total Price :{totalPrice}</h3>
                  </div>

                </div>
        </div>
    );
};

export default Viewcart;