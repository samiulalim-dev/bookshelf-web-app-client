import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowDown, FaScroll } from "react-icons/fa";
import { motion } from "motion/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import firstSlider from "../../assets/slider-1.jpg";
import secondSlider from "../../assets/slider-2.jpg";
import thirdSlider from "../../assets/slider-3.jpg";

const Banner = () => {
  return (
    <div className="  ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className=" relative bg-slate-400 md:h-[400px] h-[250px]">
            <div className="flex  items-center justify-center md:gap-30 md:px-5 h-full w-full  ">
              <div className=" absolute md:static  flex flex-col  text-2xl text-white text-center lg:text-5xl md:text-4xl  font-semibold ">
                <span className="text-indigo-700">Virtual Bookshelf</span>
                Organize your books in <br className=" hidden lg:block" /> one
                place
              </div>
              <div>
                <img
                  className=" w-full  lg:h-[350px] rounded-3xl object-contain "
                  src={firstSlider}
                  alt=""
                />
              </div>
            </div>

            <p className="absolute left-0 right-0  bottom-10 text-indigo-700 flex gap-2  items-center justify-center text-lg font-semibold text-center">
              Scroll Down{" "}
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <FaArrowDown></FaArrowDown>
              </motion.span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative">
            <img
              className=" md:h-[400px] h-[250px] w-full object-cover"
              src={thirdSlider}
              alt=""
            />
            <div className=" space-y-1 absolute top-0 right-0 bottom-0 left-0 text-center flex flex-col justify-center text-2xl md:text-5xl text-white font-semibold">
              Track your reading journey{" "}
              <span className="text-indigo-700">Virtual Bookshelf</span> helps
              you stay focused!
            </div>
            <p className="absolute left-0 right-0  bottom-10 text-indigo-700 flex gap-2  items-center justify-center text-lg font-semibold text-center">
              Scroll Down{" "}
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <FaArrowDown></FaArrowDown>
              </motion.span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" relative">
            <img
              className=" md:h-[400px] h-[250px] w-full object-cover"
              src={secondSlider}
              alt=""
            />
            <div className=" space-y-1 absolute top-0 right-0 bottom-10 left-0 text-center flex flex-col justify-center text-2xl md:text-5xl text-white font-semibold">
              Discover
              <span className="text-indigo-700"> popular books</span>
              <p>
                Check out what others are reading <br /> and upvote your
                favorites.
              </p>
            </div>
            <p className="absolute left-0 right-0  bottom-10 text-indigo-700 flex gap-2  items-center justify-center text-lg font-semibold text-center">
              Scroll Down{" "}
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <FaArrowDown></FaArrowDown>
              </motion.span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
