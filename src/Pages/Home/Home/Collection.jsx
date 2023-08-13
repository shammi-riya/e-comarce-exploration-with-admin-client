
import phone1 from '../../../assets/phone1.jpg';
import phone2 from '../../../assets/307306791_1123450614944386_6204786759970976494_n.jpg';
import phone3 from '../../../assets/4124.png_860.png';

const Collection = () => {
    return (
        <div className='grid grid-cols-3 gap-5 lg:max-w-7xl mx-auto my-10 lg:px-0 px-10 w-full'>
            <div className='flex gap-3 text-center bg-white shadow-xl p-2 transition transform  hover:shadow-2xl'>
                <div className='flex justify-center items-center'>
                    <div className='space-y-2 p-2'>
                        <p className='font-semibold text-md'>Electronics Minimal</p>
                        <h3 className='font-bold text-xl'>Get Holiday Deals</h3>
                        <button className="py-2 rounded-lg text-white px-2 block font-semibold text-md bg-[#feda00]  transition duration-300 transform">View Collection</button>
                    </div>
                </div>
                <img className='hover:scale-105 w-1/2 h-56 transition transform ' src={phone1} alt="" />
            </div>
            <div className='flex gap-3 text-center bg-white shadow-xl p-2 transition transform  hover:shadow-2xl'>
                <div className='flex justify-center items-center'>
                    <div className='space-y-2 p-2'>
                        <p className='font-semibold text-lg'>Electronics Minimal</p>
                        <h3 className='font-bold text-xl'>Get Holiday </h3>
                        <button className="py-2 rounded-lg text-white px-2 block font-semibold text-md bg-[#feda00]  transition duration-300 transform">View Collection</button>
                    </div>
                </div>
                <img className= 'w-1/2 hover:scale-105 h-56 transition transform ' src={phone2} alt="" />
            </div>
            <div className='flex gap-3 text-center bg-white shadow-xl p-2 transition transform  hover:shadow-2xl'>
                <div className='flex justify-center items-center'>
                    <div className='space-y-2 p-2'>
                        <p className='font-semibold text-lg'>Musics maks</p>
                        <h3 className='font-bold text-xl'>Feel Better</h3>
                        <button className="py-2 rounded-lg text-white px-2 block font-semibold text-md bg-[#feda00]  transition duration-300 transform">View Collection</button>
                    </div>
                </div>
                <img className='hover:scale-105 w-1/2 h-56 transition transform ' src={phone3} alt="" />
            </div>
       
        </div>
    );
};

export default Collection;
