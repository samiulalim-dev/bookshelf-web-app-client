import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router";
import Swal from "sweetalert2";
import AxiosInstance from "../../Hooks/AxiosInstance";

const MyBooks = () => {
  const { users } = use(AuthContext);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = AxiosInstance();
  useEffect(() => {
    axiosSecure.get(`email/${users.email}`).then((res) => {
      setMyBooks(res.data);
      setLoading(false);
    });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`delete/${id}`).then((res) => {
          // console.log(res.data);

          if (res.data.deletedCount) {
            const filtering = myBooks.filter((book) => book._id !== id);
            setMyBooks(filtering);
            Swal.fire({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto min-h-[50vh]  px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 ">My Added Books</h2>

      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          {myBooks.length === 0 ? (
            <p className="text-center text-gray-500">
              You haven’t added any books yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myBooks.map((book) => (
                <div
                  key={book._id}
                  className="bg-white text-black shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <img
                    src={book.photo}
                    alt={book.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 space-y-1">
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-600">
                      Author: {book.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      Status: {book.readingStatus}
                    </p>
                    <p className="text-sm text-gray-600">
                      Category: {book.category}
                    </p>
                    <p className="text-sm text-gray-600">
                      Upvotes: {book.upvote}
                    </p>
                  </div>
                  <div className="p-4 flex justify-between gap-2">
                    <Link
                      to={`/updateBook/${book._id}`}
                      className=" px-4 py-2 rounded-sm inline-block bg-purple-600 text-white"
                    >
                      Update Book
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-red-500 cursor-pointer text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
