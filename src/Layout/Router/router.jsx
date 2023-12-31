import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Products/Products";
import Login from "../../Pages/Login";
import Regester from "../../Pages/Regester";
import Viewcart from "../../Pages/Viewcart/Viewcart";
import AdminDashBordlayout from "../AdminDashBordlayout";
import AddProducts from "../../Pages/Admin/AddProducts";
import Cutomarlist from "../../Pages/Admin/Cutomarlist";
import Orderlist from "../../Pages/Admin/Orderlist";
import Productlist from "../../Pages/Admin/productlist";
import Dashbord from "../../Pages/Admin/Dashbord";
import Err from "../../Pages/Err";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Err></Err>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/viewcart",
        element: <Viewcart></Viewcart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
    ],
  },
  {
    path: "/admin/dashbord",
    element: <AdminDashBordlayout></AdminDashBordlayout>,
    children: [
      {
        path: "/admin/dashbord",
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/admin/dashbord/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/admin/dashbord/cutomarlist",
        element: <Cutomarlist></Cutomarlist>,
      },
      {
        path: "/admin/dashbord/orderlist",
        element: <Orderlist></Orderlist>,
      },
      {
        path: "/admin/dashbord/productlist",
        element: <Productlist></Productlist>,
      },
    ],
  },
]);

export default router;
