
import mockOrders from "../../Api/OrderProducts";
const Orderlist = () => {

    return (

        <div className="lg:w-[80%] mx-auto bg-white border-2 border-[#feda00] z-40 shadow-xl p-5 absolute right-14 top-0 my-24">
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-2 sm:px-4 lg:px-6 xl:px-8">Customer Name</th>
                            <th className="py-2 px-2 sm:px-4 lg:px-6 xl:px-8">Total Amount</th>
                            <th className="py-2 px-2 sm:px-4 lg:px-6 xl:px-8">Status</th>
                            <th className="py-2 px-2 sm:px-4 lg:px-6 xl:px-8">Product Names</th>
                            <th className="py-2 px-2 sm:px-4 lg:px-6 xl:px-8">Product Quintity</th>
                            <th className="py-2 px-2 sm:px-4 lg:px-6 xl:px-8">Product price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockOrders?.map((order) => (
                            <tr key={order.id} className="border-b text-center">
                                <td>{order.customerName}</td>
                                <td>${order.totalAmount.toFixed(2)}</td>
                                <td>{order.status}</td>
                                <td>{order.ProductsName}  </td>
                                <td>{order.quintity}  </td>
                                <td>{order.price}  </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>












    );
};

export default Orderlist;
