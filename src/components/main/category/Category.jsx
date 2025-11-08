import { use } from "react";
// import { useState } from "react";

const Category = ({ categoryPromiss, btnsHandler }) => {

    const categoriesData = use(categoryPromiss)
    // console.log(categoriesData)
    // const [click, setClick] = useState(false) 

    return (
        <div>
            <button onClick={() => btnsHandler('11')} id="btn-11" className="mt-2 shadow hover:bg-[#15803D] hover:text-white px-2.5 font-semibold btns w-full p-1 rounded text-left active">All Trees</button>
            {
                categoriesData.data.categories.map(category => <button
                    key={category.id}
                    className={`flex btns shadow hover:bg-[#15803D] hover:text-white flex-col mt-2 w-full p-1 px-2.5 font-semibold rounded text-left`}
                    id={`btn-${category.id}`}
                    onClick={() => btnsHandler(category.id)}
                >{category.category_name}</button>)
            }
        </div>
    );
};

export default Category;