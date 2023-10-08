import React from 'react';
import img1 from '../assets/images/imag1.jpg'

export const Milestone = () => {
  return (
    <>
     
     <div class="pb-16 bg-white " >
    <h2 class="text-2xl text-gray-900 text-center font-bold md:text-4xl">Our Milestone So Far </h2>

        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 border-b-4 border-black">
          <div class="space-y-6 md:space-y-0 md:flex flex-wrap md:gap-6 lg:items-center lg:gap-12">
            {/* <div class="md:5/12 lg:w-5/12"> */}
            {/* </div> */}
            <div class="md:7/12 lg:w-6/12">
              {/* <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
          <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p> */}
              <p class="mt-12 text-gray-600 font-normal md:text-xl font-serif">
              We have worked with many individual creators as well as brands recognized by international markets, demonstrating our versatility in serving a broad spectrum of clients and industries. Our extensive experience speaks to our commitment to excellence in every project we undertake.
              </p>
            </div>
            <div class="md:7/12 lg:w-5/12">
              {/* <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">What Our Client Say </h2> */}

              <img src={img1} width={600} alt="" />


            </div>



          </div>
        </div>
      </div>


    </>
  )
}
