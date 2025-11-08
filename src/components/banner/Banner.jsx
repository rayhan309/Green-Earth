import leaft from '../../assets/lefth.png'
import right from '../../assets/rigth.png'

const Banner = () => {
    return (
        <div className="max-h-[360px] flex bg-[#CFF0DC] justify-center items-center relative">
            <img className='absolute left-0 bottom-0 hidden lg:block max-w-[450px]' src={leaft} alt="" />
            <img className='absolute right-0 bottom-0 hidden lg:block max-w-[450px]' src={right} alt="" />
            <div className="text-center mt-16 md:mt-24 mb-12 md:mb-20 space-y-2">
                <h2 className="text-3xl md:text-5xl font-bold">Plant a Tree, Grow a Future</h2>
                <p className="text-gray-500">Join our mission to plant 1 million trees and make the Earth greener for future <br /> generations.</p>
                <button className="text-[#15803D] mt-3 font-medium bg-[#FACC15] py-2 px-4 rounded-4xl">Get Involved</button>
            </div>
        </div>
    );
};

export default Banner;