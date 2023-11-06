import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import clothes from "../components/OutfitCategory/CategoryData";
import Footer from '../components/Footer'

const Content = () => {
  let { id } = useParams();
  const outfit = clothes.find((outfit) => String(outfit.id) === id);
  return (
    <div>
      <Navbar />
      <div key={outfit.id} className="outfit-content grid grid-cols-2 ">
        <div className="left-image lg:col-span-1 xsm:col-span-2 m-20">
          <div className="flex items-center justify-center">
            <img
            src={outfit.img}
              alt={outfit.tarz}
            />
          </div>
        </div>
        <div className="right-content lg:col-span-1 xsm:col-span-2 lg:m-20 md:my-0 xsm:text-center lg:text-start  flex flex-col xsm:gap-4 gap-12">
          <h3 className="lg:text-5xl xsm:text-3xl font-bold">{outfit.tarz}</h3>
          <p className="lg:text-2xl xsm:text-xl whitespace-nowrap">
            {outfit.ustRenk} {outfit.ust} / {outfit.altRenk} {outfit.alt}
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Content;
/*         <section key={outfit.id}>
          
          <img src={outfit.img}></img>
          <div>
            <h3>{outfit.tarz}</h3>
            
          </div>
          
           </section> */
