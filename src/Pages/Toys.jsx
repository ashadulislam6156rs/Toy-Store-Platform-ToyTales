import React from 'react';
import Container from '../Container/Container';
import ToyCard from '../Componants/ToyCard';
import { useLoaderData } from 'react-router';

const Toys = () => {
   
    const toyData = useLoaderData();
  
    return (
      <div>
        <title>Toys</title>
        <Container>
          <div className="p-1">
            <h1 className="md:text-3xl text-xl font-bold py-3 md:py-7 text-center mt-5">
              Populer Toys
            </h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto pb-10">
              {toyData.map((sigleToy) => (
                <ToyCard key={sigleToy.toyId} sigleToy={sigleToy}></ToyCard>
              ))}
            </section>
          </div>
        </Container>
      </div>
    );
};

export default Toys;