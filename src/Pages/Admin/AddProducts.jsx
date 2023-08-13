import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/Authprovider";
import { toast } from "react-toastify";

const AddProducts = () => {
    const {user} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
    const postData ={
        ...data,
         email:user.email
         
    }


        axios.post("http://localhost:5000/post-product",postData)
        .then(res=>{
            if(res.data.insertedId){
                toast.success('product add successfully')
            }
        })
    };


    
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-4xl my-6">Add An Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-10 w-full" >
               <div>
                <label htmlFor="">Product Name :</label>
               <input className="w-full py-2 my-2 px-3" placeholder="product name" required type="text" {...register("name")} /><br />
               </div>
               <div className="hidden">
                <label htmlFor="">Quintity :</label>
               <input className="w-full py-2 my-2 px-3" value="0" placeholder="quantity" type="number" {...register("quantity")} /><br />
               </div>
               <div className="hidden">
                <label htmlFor="">stock:</label>
               <input className="w-full py-2 my-2 px-3" value={true} placeholder="true"  {...register("strock")} /><br />
               </div>
               <div>
                <label htmlFor="">Product Image :</label>
               <input className="w-full py-2 my-2 px-3" required placeholder="product Image" type="url" {...register("img")} /><br />
                <div>
               </div>
                    <label htmlFor="">Product Tax</label>
                <input className="w-full py-2 my-2 px-3" required placeholder="product tax" type="text"  {...register("tax")} /><br />
                </div>
               <div>
                <label htmlFor="">Product Price :</label>
               <input className="w-full py-2 my-2 px-3" required placeholder="product Price" type="number" {...register("price")} /><br />
               <div>
               </div>
                <label htmlFor="">Extra Text :</label>
               <input className="w-full py-2 my-2 px-3" placeholder="product extraTax" type="number" {...register("extraTax")} /><br />
               </div>
               <div className="lg:flex gap-5 flex-row">
              <div className="w-full">
                <label htmlFor="">Brand :</label>
              <select className="w-full bg-white py-2 px-3 my-2" required {...register("brand")}>
                    <option defaultValue="Apple">Apple</option>
                    <option value="Dell">Dell</option>
                    <option value="Sony">Sony</option>
                    <option value="Nike">Nike</option>
                    <option value="Casio">Casio</option>
                    <option value="Jabra">Jabra</option>
                </select>
              </div>
              <div className="w-full">
              <label htmlFor="">Product Code :</label>
              <select className="w-full bg-white py-2 my-2 px-3" required {...register("productCode")}>
                    <option defaultValue="SP124">SP124</option>
                    <option value="SP124">SP124</option>
                    <option value="SP129">SP120</option>
                    <option value="SP145">SP145</option>
    
                </select>
              </div>
               </div>
                {errors.productCode && <span className="text-red-500">This field is required</span>}
                {errors.name && <span className="text-red-500">This field is required</span>}
                {errors.img && <span className="text-red-500">This field is required</span>}
                {errors.price && <span className="text-red-500">This field is required</span>}
                {errors.tax && <span className="text-red-500">This field is required</span>}
                <input className="w-full py-2 text-xl bg-[#21476b] my-3 text-white" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddProducts;
