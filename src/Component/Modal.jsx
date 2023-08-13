
const Modal = ({selectedProduct,closeModal}) => {
   
    const {name,price,extraTax,img,stock,brand,quantity,productCode} =selectedProduct;
    return (
        <div>
            <div className="fixed  p-5 inset-0 border-2 border-yellow-200 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-10 w-1/3 mx-auto text-xl font-semibold shadow-amber-50 relative">
                        <div className='flex gap-2 border-2'>
                            <div className='w-1/2 '>
                                <img src={img} alt="" />
                            </div>
                            <div className='p-5'>
                                <p>Name: {name}</p>
                                <p>Price: {price}</p>
                                <p>Extra Tax: {extraTax}</p>
                                <p>Product Code: {productCode}</p>
                                <p>Product Stock: {stock ? "true" : "false"}</p>
                                <p>Product Quantity: {quantity}</p>
                                <p>Product Brand: {brand}</p>
                            </div>
                        </div>
                        <button className="mt-4 bg-red-600 px-4 text-2xl text-white py-2 absolute -top-3 right-1" onClick={closeModal}>X</button>
                    </div>
                </div>
        </div>
    );
};

export default Modal;