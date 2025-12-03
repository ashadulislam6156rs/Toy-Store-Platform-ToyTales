import React from 'react';
import BannerSlider from '../Banner/BannerSlider';
import PopularToys from '../Componants/PopularToys';
import Testimonial from '../Componants/Testimonial';
import MagicMoments from '../Componants/MagicMoments';
import Brand from '../Componants/Brand';

const Home = () => {

    return (
      <>
        <div>
          <section>
            <BannerSlider></BannerSlider>
          </section>
          <section>
            <PopularToys></PopularToys>
          </section>
          <section>
            <Brand></Brand>
          </section>
          <section className="p-5">
            <MagicMoments></MagicMoments>
          </section>
          <section>
            <Testimonial></Testimonial>
          </section>
        </div>
      </>
    );
};

export default Home;