import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import AxiosInstance from "../../Hooks/AxiosInstance";
import Loading from "../../Components/Loading/Loading";

const UpdateBook = () => {
  // const update = useLoaderData();
  const [update, setUpdate] = useState({});
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  const { users } = use(AuthContext);
  const axiosSecure = AxiosInstance();
  useEffect(() => {
    axiosSecure.get(`books/${id}`).then((res) => {
      setUpdate(res.data);
      setLoading(false);
    });
  }, []);
  const handleAddBooks = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const photo = e.target.photo.value;
    const pages = e.target.pages.value;
    const author = e.target.author.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;
    const category = e.target.category.value;
    const readingStatus = e.target.readingStatus.value;
    const overview = e.target.overview.value;
    const upvote = parseInt(e.target.upvote.value);
    const updateBook = {
      title,
      photo,
      pages,
      author,
      email,
      userName,
      category,
      readingStatus,
      overview,
      upvote,
    };
    // console.log(addBook);
    axiosSecure
      .put(`update/${update._id}`, updateBook)
      .then((res) => {
        // console.log(res.data);
        if (res.data.matchedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "your book has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="card bg-base-200   w-11/12 lg:w-3/5 my-10 mx-auto shrink-0 shadow-2xl">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="card-body ">
          <h2 className=" text-center text-4xl font-semibold mb-6">
            Update Books
          </h2>
          <form onSubmit={handleAddBooks}>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Book title */}
              <fieldset className=" fieldset ">
                <label className="label">Book Title</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter book title"
                  required
                  name="title"
                  defaultValue={update.title}
                />
              </fieldset>
              {/* Cover photo */}
              <fieldset className=" fieldset ">
                <label className="label">Cover photo</label>
                <input
                  type="url"
                  className="input w-full"
                  placeholder="Enter Cover photo URL"
                  required
                  name="photo"
                  defaultValue={update.photo}
                />
              </fieldset>
              {/* total page */}
              <fieldset className=" fieldset ">
                <label className="label">Total Pages</label>
                <input
                  type="number"
                  required
                  placeholder="Total Pages"
                  className="input input-bordered w-full"
                  name="pages"
                  defaultValue={update.pages}
                />
              </fieldset>
              {/* book author */}
              <fieldset className=" fieldset ">
                <label className="label">Book Author</label>
                <input
                  type="text"
                  name="author"
                  required
                  placeholder="Book Author"
                  className="input input-bordered w-full"
                  defaultValue={update.author}
                />
              </fieldset>
              {/* user Email */}
              <fieldset className=" fieldset ">
                <label className="label">User Email</label>
                <input
                  type="text"
                  value={users?.email}
                  className="input w-full"
                  placeholder="text"
                  readOnly
                  name="email"
                />
              </fieldset>
              {/* User Name */}
              <fieldset className=" fieldset ">
                <label className="label">User Name</label>
                <input
                  value={users?.displayName}
                  type="text"
                  className="input w-full"
                  placeholder="text"
                  readOnly
                  name="userName"
                />
              </fieldset>
              {/* book category */}
              <fieldset className=" fieldset ">
                <label className="label">Book Category</label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  required
                  defaultValue={update.category}
                >
                  <option value="" disabled>
                    Select Book Category
                  </option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-fiction">Non-Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Romance">Romance</option>
                  <option value="Science_fiction">Science Fiction</option>
                  <option value="Biography">Biography</option>
                </select>
              </fieldset>
              {/* reading status */}
              <fieldset className=" fieldset ">
                <label className="label">Reading Status</label>
                <select
                  name="readingStatus"
                  className="select select-bordered w-full"
                  required
                  defaultValue={update.readingStatus}
                >
                  <option value="" disabled>
                    Select Reading Status
                  </option>
                  <option value="Read">Read</option>
                  <option value="Reading">Reading</option>
                  <option value="Want_To_Read">Want To Read</option>
                </select>
              </fieldset>

              {/* Book Overview */}
              <fieldset>
                <label className="label">Book Overview</label>
                <textarea
                  name="overview"
                  className="textarea textarea-bordered md:col-span-2"
                  placeholder="Book Overview"
                  required
                  defaultValue={update.overview}
                ></textarea>
              </fieldset>

              {/* Upvote  */}
              <fieldset>
                <label className="label">Upvote</label>
                <input
                  type="number"
                  className="input w-full"
                  name="upvote"
                  value={0 || update?.upvote}
                  readOnly
                />
              </fieldset>
            </div>
            <button
              type="submit"
              className="btn bg-purple-600 text-white w-full rounded-4xl mt-4"
            >
              Update Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateBook;
