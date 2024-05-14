import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className="max-w-full container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500 font-semibold">Here! :)</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            corrupti minima cum corporis alias iure voluptate. Reiciendis
            cupiditate et ab veritatis obcaecati dolorum eveniet consequatur
            inventore optio. Quos, ipsum est! Est voluptatum, suscipit nisi
            corporis amet quod dolorum architecto deleniti distinctio ipsum
            dicta quo cupiditate ut ad cumque earum quis dolore, nam saepe. Ea,
            dolores ratione rem illo consectetur voluptatibus?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course