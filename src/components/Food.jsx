import React, { useState } from "react";
import {data} from '../data/data.js'

const Food = () => {
  const [foods, setFoods] = useState(data)

  const filterType = (category) => {
    setFoods(
      data.filter(item => item.category === category)
    )
  }

  const filterPrice = (price) => {
    setFoods(
      data.filter(item => item.price === price)
    )
  }

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="text-2xl md:text-4xl text-orange-600 text-center">Top Reted Menu Items</h1>

      {/* Filter row */}
      <div className="flex flex-col md:flex-row justify-between mt-10">
        {/* Filter Type */}
        <div className="mb-5">
          <p className="text-xl lg:text-2x font-semibold mb-3">Filter Type</p>
          <div className="flex flex-wrap">
            <button onClick={() => setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
            <button onClick={filterType.bind(this, 'burger')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Burgers</button>
            <button onClick={filterType.bind(this, 'pizza')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Pizza</button>
            <button onClick={filterType.bind(this, 'salad')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Salads</button>
            <button onClick={filterType.bind(this, 'chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
          </div>
        </div>
        {/* Filter Price */}
        <div className="mb-5">
          <p className="text-xl lg:text-2x font-semibold mb-3">Filter Price</p>
          <div>
            <button onClick={filterPrice.bind(this, '$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$</button>
            <button onClick={filterPrice.bind(this, '$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$</button>
            <button onClick={filterPrice.bind(this, '$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$</button>
            <button onClick={filterPrice.bind(this, '$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">$$$$</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
        {
          foods.map(food => (
            <div key={food.id} className="shadow-lg rounded-b-lg hover:scale-105 duration-300">
              <img className="w-full h-[200px] object-cover bg-cover rounded-t-lg" src={food.image} alt="" />
              <div className="flex justify-between p-2 pb-3">
                <p>{food.name}</p>
                <p><span className="bg-orange-600 p-1 px-2 text-white rounded-full">{food.price}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Food;
