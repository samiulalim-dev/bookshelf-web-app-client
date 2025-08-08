import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { data } from "react-router";
import Loading from "../Loading/Loading";

const UpcomingBookEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="py-12  md:pb-20 w-11/12 mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14 ">
        📅 Upcoming Book Events
      </h2>
      {loading ? (
        <Loading></Loading>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {events.map((event, index) => (
              <li key={index}>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 text-indigo-700 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={`mb-10 md:text-end ${
                    index === 1
                      ? "timeline-end md:text-start"
                      : "timeline-start"
                  }`}
                >
                  <time className="font-mono italic">{event.date}</time>
                  <div className="text-lg font-black">{event.title}</div>
                  {event.description}
                </div>

                <hr className=" bg-indigo-700" />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </section>
  );
};

export default UpcomingBookEvents;
