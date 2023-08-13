import { useContext, useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { BiSolidUser } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';
import { BsCartDash } from 'react-icons/bs';
import { Link, NavLink, useLocation } from "react-router-dom";
import useAddCartProducts from "../../Api/useAddCartProducts";
import useDeletecart from "../../Api/useDeletecart";
import { AuthContext } from "../../Provider/Authprovider";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation()
    const [show, setShow] = useState(false)
    const deleteCartItem = useDeletecart()
    const { user, logOut } = useContext(AuthContext);

    const [, data, refetch] = useAddCartProducts();
    console.log(data);
    const userIcon =
        <div className="flex gap-3 text-2xl text-white">
            <p><Link to='/login'><BiSolidUser></BiSolidUser></Link></p>
            <p><AiOutlineHeart></AiOutlineHeart></p>
            <p className="relative"> <span onMouseEnter={() => setShow(true)}
            ><BsCartDash></BsCartDash></span>
                <span className="absolute -right-2 text-xl -top-5">{data?.length || 0}</span>


            </p>
        </div>




    const handleDeleteCart = (id) => {
        deleteCartItem(id, refetch)
    }



    const handleLogOut = () => {

        logOut()
            .then({
                
            })
            .catch(err => console.log(err))
    }


    return (
        <div>

            <nav className="w-full bg-[#21476b] shadow py-3 absolute top-0 z-20">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="javascript:void(0)">
                                <h2 className="text-2xl font-bold text-white">Eazy Bazar</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-white-700 rounded-md outline-none focus:border-white focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <span className="text-white"> <GrClose /></span>
                                    ) : (

                                        <span className="text-white bg-white"><FiMenu /></span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center text-xl justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white font-semibold hover:text-[#feda00]">
                                    <NavLink
                                        to="/"
                                        className={location.pathname === '/' ? 'text-[#feda00]' : ''}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="text-white font-semibold hover:text-[#feda00]">
                                    <NavLink
                                        to="/products"
                                        className={location.pathname === '/products' ? 'text-[#feda00]' : ''}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="text-white font-semibold hover:text-[#feda00]">
                                    <NavLink
                                        to="/admin/dashbord"
                                        className={location.pathname === '/admin/dashbord' ? 'text-[#feda00]' : ''}
                                    >
                                        Admin
                                    </NavLink>
                                </li>
                                {
                                    user && <li onClick={handleLogOut}
                                    className="text-white font-semibold hover:text-[#feda00]">

                                    Logout
                                </li>
                                }
                            </ul>
                            <div className="mt-3 flex space-y-2 lg:hidden md:inline-block">

                                {userIcon}
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        {userIcon}
                    </div>
                </div>
            </nav>

            {
                show && <div onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)} className="w-96 bg-white border-2 border-[#feda00] z-40 shadow-xl p-5 absolute right-14 top-0 my-24">
                    <table className="table-auto border-collapse border w-full">
                        <thead>
                            <tr className="px-5 bg-gray-100">
                                <th className="py-2">Name</th>
                                <th className="py-2">Image</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(product => (
                                <tr key={product._id} className="px-5 border-b">
                                    <td className="py-2 px-2">{product?.name.slice(0, 10)}</td>
                                    <td className="py-2 px-2"><img className="h-14 w-14" src={product?.img} alt="" /></td>
                                    <td className="py-2 px-2">{product?.price}</td>
                                    <td className="py-2 px-2"><span onClick={() => handleDeleteCart(product._id)}><AiOutlineDelete></AiOutlineDelete></span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center">

                        <Link to="/viewcart">
                            <button className="py-3 w-full my-5 px-5 block font-semibold text-xl bg-[#feda00] text-black transition duration-300 transform ">View Cart</button></Link>
                    </div>
                </div>

            }



        </div>
    );
};

export default Navbar;