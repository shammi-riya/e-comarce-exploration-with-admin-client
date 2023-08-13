

 

const Button = ({children}) => {
    return (
        <div>
            <button  className="py-3 px-4 rounded block font-semibold text-xl bg-[#feda00] text-black transition duration-300 transform hover:scale-105">{children}</button>
        </div>
    );
};

export default Button;