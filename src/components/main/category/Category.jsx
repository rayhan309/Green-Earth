import { use } from "react";
// import { useState } from "react";

const Category = ({ categoryPromiss }) => {

    const categoriesData = use(categoryPromiss)
    // console.log(categoriesData)
    // const [click, setClick] = useState(false)

    const btnsHandler = (id) => {
        const categoryId = document.getElementById(`btn-${id}`)
        const btns = document.querySelectorAll('.btns')
        btns.forEach(btn => {
            btn.classList.remove('active')
        });
        categoryId.classList.add('active')
    }

    return (
        <div>
            <button onClick={() => btnsHandler('11')} id="btn-11" className="mt-2 btns w-full p-1 rounded text-left active">All Trees</button>
            {
                categoriesData.data.categories.map(category => <button
                    key={category.id}
                    className={`flex btns flex-col mt-2 w-full p-1 rounded text-left`}
                    id={`btn-${category.id}`}
                    onClick={() => btnsHandler(category.id)}
                >{category.category_name}</button>)
            }
        </div>
    );
};

export default Category;