import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section class=" bg-neutral-100">
        <div class="container mx-auto py-16 px-6 sm:px-8 lg:px-20 ">
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Hotel Ramson's Stay Inn is a great choice for travellers looking
                for a 3 star star hotel in Shillong, Meghalaya 793019. This
                Hotel stands out as one of the highly recommended hotel in
                Shillong, Meghalaya . Hotel is rated 4.3 out of 5, which is
                considered as very good. From all the 3 Star hotels in Shillong
                Meghalaya , this property is very much popular among the
                tourists. A smooth check-in/check-out process, flexible policies
                and friendly management garner great customer satisfaction for
                this property. It is a couple-friendly property. You can find
                numerous hotels in Shillong, Meghalaya under different
                categories and this property is one the best hotel under its
                category.
              </p>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Contact Us
                  <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="image (77).jpeg"
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
