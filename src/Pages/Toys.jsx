import React, { useState } from 'react';
import Container from '../Container/Container';
import ToyCard from '../Componants/ToyCard';
import {  useLoaderData } from 'react-router';

const Toys = () => {
  const toyData = useLoaderData().sort((a, b) => b.rating - a.rating);
  const [filterData, setFilterData] = useState([...toyData]);
  const [activeCategory, setActiveCategory] = useState("All");
  const category = toyData.map((toy) => toy.subCategory);
  const uniqueCategory = [...new Set(category)];
  uniqueCategory.unshift("All");

  // Building Blocks,Vehicles, Educational,Role Play,Soft Toys,Musical Toys,Figurines,Art & Craft,Decorative Toys
  const handleCategoryItem = (Category) => {
    if (uniqueCategory[0] === Category) {
      setFilterData([...toyData]);
      setActiveCategory(Category);
    }
    else {
      const toys = toyData.filter((toy) => toy.subCategory === Category);
      setFilterData(toys);
      setActiveCategory(Category);
      }
      
  };

  console.log(filterData);

  return (
    <div>
      <title>Toys</title>
      <Container>
        <div className="p-1">
          <h1 className="md:text-3xl text-xl font-bold py-3 md:py-7 text-center">
            Populer Toys
          </h1>
          <p className="text-md text-gray-600 mb-7 md:w-5/6 mx-auto text-center">
            Our Popular Toys section features the most loved, top-rated, and
            trending toys of the season. Carefully selected based on demand and
            customer reviews, these toys ensure fun, creativity, and endless
            playtime for every child.
          </p>
          {/*  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto pb-10*/}
          <div className="grid md:grid-cols-12 gap-5 pb-10">
            <aside className="lg:col-span-2 md:col-span-3 col-span-fullmd:space-x-0 space-x-2 space-y-2">
              {uniqueCategory.map((Category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryItem(Category)}
                  className={`btn md:w-full font-semibold ${
                    activeCategory === Category
                      ? " bg-[#258184] text-white"
                      : ""
                  }`}
                >
                  {Category}
                </button>
              ))}
            </aside>
            <section className="lg:col-span-10 col-span-full md:col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filterData.map((sigleToy) => (
                <ToyCard key={sigleToy.toyId} sigleToy={sigleToy}></ToyCard>
              ))}
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Toys;