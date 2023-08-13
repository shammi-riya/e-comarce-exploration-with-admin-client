import Slider from "react-slick";
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';

const Bannar = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
       <div className="w-full h-[95vh] overflow-x-hidden">
         <Slider {...settings}>
         <div className="relative ">
                <img className="h-[90vh] w-full" src={slider1} alt="" />
                <div className="absolute z-50 top-1/3 lg:left-44 left-6 text-center space-y-5">
                    <h3 className="text-black text-5xl font-bold">New Digital <br /> Google Earports</h3>
                    <button className="py-4 px-5 block font-semibold text-xl bg-[#feda00] text-black transition duration-300 transform hover:scale-105">Explore New Look And Get Best Offers</button>
                    <button className="py-3 px-4 text-xl rounded-2xl bg-[#21476b] text-white hover:bg-gray-800 transition duration-300 transform hover:scale-105">Shop Now</button>
                </div>
            </div>
            <div className="relative ">
                <img className="h-[90vh] w-full" src={slider2} alt="" />
                <div className="absolute z-50 top-1/3 lg:right-44 right-6 text-center space-y-5">
                    <h3 className="text-black text-5xl font-bold">New Digital <br /> Google Earports</h3>
                    <button className="py-4 px-5 block font-semibold text-xl bg-[#feda00] text-black transition duration-300 transform hover:scale-105">Explore New Look And Get Best Offers</button>
                    <button className="py-2 px-3 text-xl rounded-xl bg-[#21476b] text-white hover:bg-gray-800 transition duration-300 transform hover:scale-105">Shop Now</button>
                </div>
            </div>
         </Slider>
       </div>
    );
};

export default Bannar;
