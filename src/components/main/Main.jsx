import axios from "axios";
import Category from "./category/Category";
import AllCards from "./allCards/AllCards";
import { Suspense } from "react";
import Spinner from "../spinner/Spinner";

// category
const categoryPromiss = axios('https://openapi.programming-hero.com/api/categories');

// all data
const allDataPromiss = axios("https://openapi.programming-hero.com/api/plants");

const Main = () => {
  const btnsHandler = (id) => {
    const categoryId = document.getElementById(`btn-${id}`)
    const btns = document.querySelectorAll('.btns')
    btns.forEach(btn => {
      btn.classList.remove('active')
    });
    categoryId.classList.add('active')
    // categoryCards(id)
  }

  // const categoryCards = id => {

  // }

  return (
    <>
      {/* all category */}
      <div className="col-span-2 p-2">
        <h3 className="text-xl font-semibold">Categories</h3>
        <Category categoryPromiss={categoryPromiss}
          btnsHandler={btnsHandler}></Category>
      </div>

      {/* all data */}
      <div className="border-2 border-amber-200 col-span-8 grid grid-cols-3 gap-3">
        <Suspense fallback={<Spinner></Spinner>}>
          <AllCards allDataPromiss={allDataPromiss}></AllCards>
        </Suspense>
    </div>

    </>
  );
};

export default Main;