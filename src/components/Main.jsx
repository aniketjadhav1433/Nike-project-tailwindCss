import React, { useState } from "react";
import { arrowRight } from "../assets/icons";
import {bigShoe1,bigShoe2,bigShoe3 } from "../assets/images";


const Main = () => {

    const [currImg, setCurrImg] = useState(bigShoe1)

    const changeImage = (img)=>{
        setCurrImg(img)
    }

  return (
    <div className="px-6 grid xl:grid-cols-2  grid-cols-1 mt-[10vh] items-center gap-10  w-full">

       <div>

        <span className="text-orange-500 inline-block text-2xl sm:text-3xl my-8">
          Our Summer Collections
        </span>

        <h1 className="sm:text-8xl text-4xl">The New Arrival </h1>
        <h1 className="sm:text-8xl text-4xl">
          <span className="text-orange-500"> Nike </span> shoes
        </h1>

        <p className="sm:text-3xl text-2xl my-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <button className="flex items-center p-4 bg-orange-500 rounded-full mt-8 gap-2 text-2xl sm:text-3xl text-white capitalize">
          shop now <img src={arrowRight} alt="" />{" "}
        </button>

        <div className="flex justify-between flex-wrap gap-5 w-[100%] sm:w-[80%] sm:text-4xl mt-10">

            <h1 className="flex flex-col font-bold text-3xl sm:text-4xl">1K+ <span className="font-normal">brands</span></h1>
            <h1 className="flex flex-col font-bold text-3xl sm:text-4xl">500+ <span className="font-normal">shops</span></h1>
            <h1 className="flex flex-col font-bold text-3xl sm:text-4xl">250K+ <span className="font-normal">customers</span></h1>

        </div>

       </div>

        <div className={` w-full bg-hero bg-cover bg-center relative py-[5rem] `}  >

            <img src={currImg} alt="" />


            <div className="absolute -bottom-[2rem]  left-8 sm:left-12 sm:-bottom-[4rem] sm:w-[60%] xl:w-[80%]  flex   w-[80%] gap-4 ">

                <div className={`bg-card bg-center rounded-md bg-cover p-3   border-2  ${currImg === bigShoe1 ? "border-red-600" : "border-none"}`} onClick={()=>changeImage(bigShoe1)}>
                    <img src={bigShoe1} alt="" />
                </div>

                <div className={`bg-card bg-center rounded-md bg-cover p-3    border-2   ${currImg === bigShoe2 ? "border-red-600" : "border-none"}`} onClick={()=>changeImage(bigShoe2)}>
                    <img src={bigShoe2} alt="" />
                </div>

                <div className={`bg-card bg-center rounded-md bg-cover p-3    border-2   ${currImg === bigShoe3 ? "border-red-600" : "border-none"}`} onClick={()=>changeImage(bigShoe3)}>
                    <img src={bigShoe3} alt="" />
                </div>

            </div>

       
        </div>

    </div>
  );
};

export default Main;
