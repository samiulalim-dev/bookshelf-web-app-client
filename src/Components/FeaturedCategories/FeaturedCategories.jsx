import React, { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaBook } from "react-icons/fa";
import Loading from "../Loading/Loading";
import axios from "axios";
import { Link } from "react-router";
const FeaturedCategories = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  // console.log(featuredBooks);
  const [loading, setLoading] = useState(true);
  // const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookshelf-web-app-server.vercel.app/books")
      .then((res) => {
        setFeaturedBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  // useEffect(() => {
  const categoryArray = [];

  featuredBooks.forEach((book) => {
    const existing = categoryArray.find(
      (item) => item.category === book.category
    );

    if (existing) {
      existing.count += 1;
    } else {
      categoryArray.push({ category: book.category, count: 1 });
    }
  });
  // setCategory(categoryArray);
  // }, []);

  return (
    <section className=" w-11/12 mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10  ">
        Featured Categories
      </h2>

      {loading ? (
        <Loading></Loading>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categoryArray.map((cat, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{cat.category}</h3>
                <div className=" flex items-center">
                  <span className=" text-lg font-medium">total books</span>:
                  <span className=" text-2xl font-bold"> {cat.count}</span>
                </div>
                <Link
                  to={`/category/${cat.category}`}
                  className=" btn mt-2 bg-purple-600 text-white"
                >
                  See Books
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default FeaturedCategories;
