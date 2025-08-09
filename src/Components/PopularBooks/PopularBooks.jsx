import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

const PopularBooks = () => {
  const [popular, setPopular] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://bookshelf-web-app-server.vercel.app/upvote")
      .then((res) => {
        setPopular(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-11/12 data-theme:bg-amber-200 mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
        Popular Books
      </h2>
      {loading ? (
        <Loading></Loading>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3"
        >
          {popular.map((pop) => (
            <div key={pop._id} className="card bg-base-100  shadow-sm">
              <figure>
                <img
                  className=" h-60 w-full object-cover"
                  src={pop.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pop.title}</h2>
                <p>
                  upvote:<span>{pop.upvote}</span>
                </p>

                <p>{pop.overview}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/books/${pop._id}`}
                    className="btn bg-purple-600 text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PopularBooks;
