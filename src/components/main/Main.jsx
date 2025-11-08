import axios from "axios";
import Category from "./category/Category";

// category
const categoryPromiss = axios('https://openapi.programming-hero.com/api/categories');

const Main = () => {
    return (
     <>
     {/* all category */}
       <div className="col-span-2 p-2">
        <h3 className="text-xl font-semibold">Categories</h3>
         <Category categoryPromiss={categoryPromiss}></Category>
       </div>

     </>
    );
};

export default Main;