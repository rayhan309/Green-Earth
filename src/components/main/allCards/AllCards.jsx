import { use } from "react";

const AllCards = ({ allDataPromiss }) => {

    const allData = use(allDataPromiss)

    const allDatas = allData.data.plants;
    // console.log(image, name, description, price, category)

    return (
        <>
            {
                allDatas.map(data =>
                <div className="border-2 p-2 rounded-lg bg-white max-h-[450px]">
                    <img className="h-48 w-full object-cover rounded-lg" src={data.image} alt="" />
                    <h2 className="font-semibold mt-1.5">{data.name}</h2>
                    <p className="text-[14px] font-normal text-gray-500 mt-2.5">{data.description}</p>
                    <div className="flex justify-between items-center mt-2.5">
                        <p className="py-1 px-3 flex items-center gap-2 rounded-2xl text-[#15803D] bg-[#DCFCE7]"><div className="h-[12px] rounded-full bg-[#15803D] w-[12px]"></div> fruits categoru</p>
                        <p>price</p>
                    </div>
                    <button className="text-white mt-5 mb-2 bg-[#15803D] py-[6px] rounded-3xl px-3 w-full font-medium">Add to Card</button>
                </div>)
            }
        </>
    );
};

export default AllCards;