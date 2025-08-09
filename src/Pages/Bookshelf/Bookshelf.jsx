import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { Link, useLoaderData } from "react-router";

const Bookshelf = () => {
  const initialBooks = useLoaderData();
  // console.log(initialBooks);

  const [books, setBooks] = useState(initialBooks);
  const [loading, setLoading] = useState(false);
  const [readingStatus, setReadingStatus] = useState("");
  const [search, setSearch] = useState("");
  // console.log(search);
  //   console.log(books);
  useEffect(() => {
    if (readingStatus) {
      setLoading(true);
      axios
        .get(
          `https://bookshelf-web-app-server.vercel.app/books?readingStatus=${readingStatus}`
        )
        .then((res) => {
          setBooks(res.data);
          setLoading(false);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
    if (search) {
      setLoading(true);
      axios
        .get(
          `https://bookshelf-web-app-server.vercel.app/books?search=${search}`
        )
        .then((res) => {
          setBooks(res.data);
          setLoading(false);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  }, [readingStatus, search]);
  return (
    <div className=" bg-base-200">
      <div className="w-11/12 mx-auto px-4 py-10 ">
        <h2 className="text-3xl font-bold text-center mb-8">📚 Bookshelf</h2>
        <div className=" flex gap-3 flex-col items-center justify-center my-8">
          <div className="flex items-center gap-3">
            <div>
              {" "}
              <h2 className="">Search Books:</h2>
            </div>
            <div>
              {" "}
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Primary"
                className="input input-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <h2>Filter books:</h2>
            </div>
            <div>
              <select
                onChange={(e) => setReadingStatus(e.target.value)}
                className="select select-primary cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Reading Status
                </option>

                <option value="Read">Read</option>
                <option value="Reading">Reading</option>
                <option value="Want_To_Read">Want to read</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="card shadow-xl bg-white text-black hover:shadow-2xl transition"
              >
                <figure className="h-60 overflow-hidden">
                  <img
                    src={book.photo}
                    alt={book.title}
                    className="w-full h-full  object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{book.title}</h2>
                  <p className="text-sm text-gray-600">Author: {book.author}</p>
                  <div className="badge badge-outline mt-2">
                    {book.category}
                  </div>
                  <div className="mt-2  flex items-center justify-between ">
                    <div>
                      <Link
                        to={`/books/${book._id}`}
                        className="  px-4 py-2 rounded-sm inline-block bg-purple-600 text-white"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="text-indigo-700 font-medium">
                      👍 Upvotes: {book.upvote}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
