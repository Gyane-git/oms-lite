"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const brands = [
  {
    id: 1,
    image: "/global.jpeg", // replace with your image path
    title: "Global Tech Nepal",
    offer: "",
    logo: "",
  },
  {
    id: 2,
    image: "/garg.png",
    title: "Garg Dental",
    offer: "",
    logo: "",
  },
  {
    id: 3,
    image: "/cg.jpeg",
    title: "CG Group",
    offer: "",
    logo: "",
  },
  {
    id: 4,
    image: "/amda.jpeg",
    title: "Amda Nepal",
    offer: "",
    logo: "",
  },
  {
    id: 5,
    image: "/deli.png",
    title: "Deli Nepal",
    offer: "",
    logo: "",
  },
];

export default function OurclientSlider() {
  return (
    <div className="max-w-7xl mx-auto py-10 bg-white">

         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
          We Have Been Featured On
          
        </h2>
        <br/>
    
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl  text-black transition bg-gray-100">
              <Image
                src={brand.image}
                alt={brand.title}
                width={500}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">{brand.logo}</p>
                <h3 className="text-lg font-semibold">{brand.title}</h3>
                <p className="text-red-500 font-bold">{brand.offer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
