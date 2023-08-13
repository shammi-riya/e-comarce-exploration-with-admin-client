import { BiCart, BiHeart } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import Product from '../../Api/Product';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { AddtoCart } from '../../Api/cart';
import useAddCartProducts from '../../Api/useAddCartProducts';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../Component/Modal';
import Loader from '../../Component/Loader';

const Products = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [productData, loading] = Product();
    const [, , refetch] = useAddCartProducts();
    const [selectedProduct, setSelectedProduct] = useState(null)

    if (loading) {
        return <Loader></Loader>
    }




    const handaleAddToCart = (product) => {
        console.log(product);
        if (user) {
            const productId = product._id;
            delete product._id;

            const updatedProduct = {
                ...product,
                quantity: product.quantity + 1
            };

            const productInfo = {
                ...updatedProduct,
                productId,
                email: user?.email
            };

            AddtoCart(productInfo, refetch);
        }else{
            toast('plz login now!')
            navigate("/login", { state: { from: location } })

        }
    };





    const openModal = (product) => {
        setSelectedProduct(product);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedProduct(null);
    };




    return (
        <div>
            <div className='grid py-28 lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto lg:px-0  px-7'>
                {
                    productData.map(product => <div key={product.name}
                        className='relative h-96 space-y-3 shadow-md  text-center group overflow-hidden transition-transform duration-300 transform hover:-translate-y-2'>
                        <img className='w-full h-72' src={product.img} alt="" />
                        <h5 className='mt-2 text-2xl font-semibold'>{product.name}</h5>
                        <p className='text-gray-600 pb-4'>Price:${product.price}</p>

                        <div className='opacity-0 group-hover:opacity-100 transition-opacity  absolute bottom-32 left-1/2 transform -translate-x-1/2'>
                            <div className='flex justify-center items-center gap-3'>
                                <span onClick={() => handaleAddToCart(product)}
                                    className='p-3 text-lg bg-[#21476b] rounded-full duration-300 transform hover:-translate-y-2 font-bold hover:bg-[#feda00] text-white'><BiCart /></span>
                                <span className='p-3 font-bold text-lg bg-[#21476b] duration-300 transform hover:-translate-y-2 rounded-full hover:bg-[#feda00] text-white'><BiHeart /></span>
                                <span onClick={() => openModal(product)}
                                    className='p-3 font-bold text-lg bg-[#21476b] duration-300 transform hover:-translate-y-2 rounded-full hover:bg-[#feda00] text-white'><BsEye /></span>
                            </div>
                        </div>
                    </div>)
                }



            </div>

            {
                selectedProduct && <Modal selectedProduct={selectedProduct} closeModal={closeModal}></Modal>
            }
        </div>
    )
}
export default Products;
