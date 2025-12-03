import React from 'react';
import Container from '../Container/Container';
import img1 from "../assets/SharminAkter.jpeg"
import img2 from "../assets/tanvir.jpeg"
import img3 from "../assets/SonjobRahman.jpeg"

const AboutUs = () => {
    return (
      <Container>
        <div className="pb-10 px-5 md:px-0">
          <h1 className="md:text-3xl text-xl font-bold py-3 text-[#258184] md:py-7 text-center">
            About ToyTales
          </h1>


          {/* Our Core Values */}
          <section className="p-6 bg-white sm:p-8 lg:p-12 mb-10 rounded-2xl shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#258184] mb-4">
              Our Core Values
            </h2>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>
                <strong>Quality First:</strong> Every toy meets high safety and
                durability standards.
              </li>
              <li>
                <strong>Creativity & Learning:</strong> Our toys inspire
                imagination and develop skills.
              </li>
              <li>
                <strong>Customer Trust:</strong> We prioritize honest service
                and long-term relationships.
              </li>
              <li>
                <strong>Innovation:</strong> We bring fresh, modern, and
                trending toy experiences.
              </li>
            </ul>
          </section>

          {/* Meet Our Team */}
          <section className=" pt-2 md:pt-3 mb-10">
            <h2 className="text-2xl text-center sm:text-3xl font-bold text-[#258184] mb-6">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                <img
                  className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"
                  src={img3}
                  alt=""
                />
                <h3 className="text-xl font-semibold">Ahsan Rahman</h3>
                <p className="text-gray-600 text-sm">Founder & CEO</p>
              </div>

              {/* Team Member 2 */}
              <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                <img
                  className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"
                  src={img1}
                  alt=""
                />
                <h3 className="text-xl font-semibold">Nadia Islam</h3>
                <p className="text-gray-600 text-sm">Product Designer</p>
              </div>

              {/* Team Member 3 */}
              <div className="p-6 bg-white rounded-xl shadow text-center hover:shadow-lg transition">
                <img
                  className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"
                  src={img2}
                  alt=""
                />

                <h3 className="text-xl font-semibold">Tanvir Ahmed</h3>
                <p className="text-gray-600 text-sm">Marketing Lead</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
};

export default AboutUs;