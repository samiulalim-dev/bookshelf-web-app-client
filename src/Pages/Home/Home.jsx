import React from "react";
import Banner from "../../Components/Banner/Banner";
import PopularBooks from "../../Components/PopularBooks/PopularBooks";
import FeaturedCategories from "../../Components/FeaturedCategories/FeaturedCategories";
import UserTestimonials from "../../Components/UserTestimonials/UserTestimonials";
import UpcomingBookEvents from "../../Components/UpcomingBookEvents/UpcomingBookEvents";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <PopularBooks></PopularBooks>
      </div>
      <div>
        <FeaturedCategories></FeaturedCategories>
      </div>
      <div>
        <UserTestimonials></UserTestimonials>
      </div>
      <div>
        <UpcomingBookEvents></UpcomingBookEvents>
      </div>
    </div>
  );
};

export default Home;
