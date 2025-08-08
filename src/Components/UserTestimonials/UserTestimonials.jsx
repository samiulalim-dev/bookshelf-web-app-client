import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Loading from "../Loading/Loading";

const UserTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("./Testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
        What Readers Say
      </h2>

      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 border-2 border-indigo-500"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.review}</p>
              <div className="flex gap-1 ">⭐⭐⭐⭐⭐</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTestimonials;
