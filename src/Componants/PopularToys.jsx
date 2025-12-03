import React from 'react';
import Container from '../Container/Container';
import HomePopulerSignleToy from './HomePopulerSignleToy';
import { useLoaderData } from 'react-router';

const PopularToys = () => {
  
  const toyDatas = useLoaderData()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 9);
  
    return (
      <>
        <Container>
          <div className="p-1">
            <h1 className="md:text-3xl text-xl font-bold py-2 md:py-5 text-center">
              Populer Toys Found <span>({toyDatas.length})</span>
            </h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto pb-5">
              {toyDatas.map((sigleToy) => (
                <HomePopulerSignleToy
                  key={sigleToy.toyId}
                  sigleToy={sigleToy}
                ></HomePopulerSignleToy>
              ))}
            </section>
          </div>
        </Container>
      </>
    );
};

export default PopularToys;