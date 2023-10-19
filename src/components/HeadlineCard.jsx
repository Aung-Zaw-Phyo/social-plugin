import React from "react";

const HeadlineCard = () => {
  return <div className="max-w-[1640px] mx-auto p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="relative rounded-lg">
        <div className="absolute bg-black/40 w-full h-full  rounded-lg">
            <p className="mt-10 text-xl md:text-2xl text-white px-4">Delicious Noddle</p>
            <p className="my-2 text-lg md:text-xl text-white px-4">Through 8/26</p>
            <button className="mx-4 bg-white border-white text-black absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full  rounded-lg object-cover bg-cover" src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    <div className="relative rounded-lg">
        <div className="absolute bg-black/40 w-full h-full  rounded-lg">
            <p className="mt-10 text-xl md:text-2xl text-white px-4">Delicious Noddle</p>
            <p className="my-2 text-lg md:text-xl text-white px-4">Through 8/26</p>
            <button className="mx-4 bg-white border-white text-black absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full  rounded-lg object-cover bg-cover" src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    <div className="relative rounded-lg">
        <div className="absolute bg-black/40 w-full h-full  rounded-lg">
            <p className="mt-10 text-xl md:text-2xl text-white px-4">Delicious Noddle</p>
            <p className="my-2 text-lg md:text-xl text-white px-4">Through 8/26</p>
            <button className="mx-4 bg-white border-white text-black absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full  rounded-lg object-cover bg-cover" src="https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    <div className="relative rounded-lg">
        <div className="absolute bg-black/40 w-full h-full  rounded-lg">
            <p className="mt-10 text-xl md:text-2xl text-white px-4">Delicious Noddle</p>
            <p className="my-2 text-lg md:text-xl text-white px-4">Through 8/26</p>
            <button className="mx-4 bg-white border-white text-black absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full  rounded-lg object-cover bg-cover" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  </div>;
};

export default HeadlineCard;
