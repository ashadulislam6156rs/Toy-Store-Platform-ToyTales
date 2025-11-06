import React from 'react';
import Container from '../Container/Container';
import HomePopulerSignleToy from './HomePopulerSignleToy';
import { useLoaderData } from 'react-router';

const PopularToys = () => {
  
  const toyDatas = useLoaderData();
  
    return (
      <>
        <Container>
          <div className="p-1">
            <h1 className="md:text-3xl text-xl font-bold py-3 md:py-7">
              Populer Toys Found <span>({toyDatas.length})</span>
            </h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto pb-10">
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