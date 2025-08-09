import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";
import AxiosInstance from "../../Hooks/AxiosInstance";

const SeeBooks = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = useParams().category;
  const axiosSecure = AxiosInstance();
  useEffect(() => {
    axiosSecure.get(`category/${category}`).then((res) => {
      setCategoryData(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="w-11/12 mt-10 mx-auto">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            {categoryData.map((cat) => (
              <div
                key={cat._id}
                className="card bg-white text-black  shadow-sm"
              >
                <figure>
                  <img
                    className=" h-60 w-full object-cover"
                    src={cat.photo}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{cat.title}</h2>
                  <div>
                    <p className="text-lg font-medium">
                      upvote: <span>{cat.upvote}</span>
                    </p>
                    <p className="text-lg font-medium">
                      Category: <span>{cat.category}</span>
                    </p>
                  </div>

                  <p>{cat.overview}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/books/${cat._id}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-sm inline-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeBooks;
