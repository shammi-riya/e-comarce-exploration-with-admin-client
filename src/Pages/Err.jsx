import { Link } from "react-router-dom";
import err from '.././assets/404 Error with a cute animal-bro.png'

const Err = () => {
    return (
        <div className="w-1/2 mx-auto text-5xl h-screen space-y-3 my-10">
            <div className="text-center">
                <img className="h-[80vh]" src={err} alt="" />

           <div className="flex justify-center items-center">
           <Link to='/'><button className=" py-4 px-5 block font-semibold text-xl bg-[#feda00] text-black transition duration-300 transform hover:scale-105">Go To Home</button></Link>
           </div>
        </div>

            </div>
    );
};

export default Err;