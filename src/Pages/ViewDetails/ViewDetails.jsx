import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { formatDate } from "date-fns";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import AxiosInstance from "../../Hooks/AxiosInstance";
import Loading from "../../Components/Loading/Loading";

const ViewDetails = () => {
  const { users } = use(AuthContext);
  const axiosSecure = AxiosInstance();

  const id = useParams().id;

  const [book, setBook] = useState({});
  const [bookLoading, setBookLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const [updateReview, setUpdateReview] = useState({});

  // console.log(updateReview);
  // console.log(reviews);

  useEffect(() => {
    axiosSecure.get(`books/${id}`).then((res) => {
      setBook(res.data);
      setBookLoading(false);
    });
  }, []);

  useEffect(() => {
    axiosSecure.get("review").then((res) => {
      setReviews(res.data);
    });
  }, []);
  //   console.log(book);
  const handleUpvote = () => {
    axiosSecure
      .patch(`upvote/${book._id}`)
      .then((res) => {
        // console.log(res.data);
        setBook({ ...book, upvote: res.data.upvote });
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const email = users.email;
    const name = users.displayName;
    const bookId = book._id;
    const createAt = formatDate(new Date(), "yyyy-MM-dd");
    const reviewInfo = {
      review,
      email,
      bookId,
      name,
      createAt,
    };
    // console.log(reviewInfo);
    axiosSecure.post("review", reviewInfo).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        axiosSecure.get("review").then((res) => {
          setReviews(res.data);
        });
        e.target.reset();
      }
    });
  };
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const createAt = formatDate(new Date(), "yyyy-MM-dd");
    const updateReviewData = {
      review,
      createAt,
    };
    // console.log(review, updateReview._id);
    axiosSecure
      .put(`review/${updateReview._id}`, updateReviewData)
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          const filtering = reviews.map((r) =>
            r._id === updateReview._id
              ? {
                  ...r,
                  review: updateReviewData.review,
                  createAt: updateReviewData.createAt,
                }
              : r
          );
          setReviews(filtering);
          document.getElementById("my_modal_1").close();
        }
      });
  };
  const handleDeleteReview = (id) => {
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
        axiosSecure.delete(`review/delete/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount) {
            const filtering = reviews.filter((review) => review._id !== id);
            setReviews(filtering);
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleStatusChanged = () => {
    let newStatus = "";
    if (book.readingStatus === "Want To Read") {
      newStatus = "Reading";
    } else if (book.readingStatus === "Reading") {
      newStatus = "Read";
    }
    // console.log(newStatus);

    if (newStatus) {
      axiosSecure
        .patch(`update/status/${book._id}`, { readingStatus: newStatus })
        .then((res) => {
          if (res.data.modifiedCount) {
            setBook({ ...book, readingStatus: newStatus });
          }
        });
    }
  };
  const hasReview = reviews.find(
    (review) => review.email === users.email && review.bookId === id
  );

  return (
    <div>
      {bookLoading ? (
        <Loading></Loading>
      ) : (
        <div className="md:max-w-4xl w-11/12 bg-indigo-100 rounded-2xl  mt-10 mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={book.photo}
              alt={book.title}
              className="w-full md:w-1/2 h-auto rounded-lg object-contain shadow-lg"
            />

            <div className="space-y-3 w-full">
              <h2 className="text-3xl font-bold text-indigo-700">
                {book.title}
              </h2>
              <p>
                <span className="font-semibold">Author:</span> {book.author}
              </p>
              <p>
                <span className="font-semibold">Total Pages:</span> {book.pages}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {book.category}
              </p>
              <p>
                <span className="font-semibold">Reading Status:</span>{" "}
                {book.readingStatus}
              </p>
              <p>
                <span className="font-semibold">Upvotes:</span> {book.upvote}
              </p>
              <p className="mt-4">
                <span className="font-semibold">Overview:</span>
              </p>
              <p className="text-gray-700">{book.overview}</p>
              <hr />
              <div className="text-sm text-gray-500 mt-4">
                <p>
                  📧 <span className="font-semibold">Added by:</span>{" "}
                  {book.userName} ({book.email})
                </p>
              </div>
              <button
                onClick={handleUpvote}
                disabled={users?.email === book.email}
                className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer hover:bg-indigo-700 disabled:bg-gray-400"
              >
                🔼 Upvote ({book.upvote})
              </button>
            </div>
          </div>
          {/* tracker section */}
          {/* Step Tracker */}
          <div className="flex items-center justify-between w-full mt-10 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  book.readingStatus === "Want To Read" ||
                  book.readingStatus === "Reading" ||
                  book.readingStatus === "Read"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                1
              </div>
              <p className="text-sm mt-2">Want to Read</p>
            </div>

            <hr
              className={`h-1 ${
                book.readingStatus === "Reading" ||
                book.readingStatus === "Read"
                  ? "border-2 border-green-500"
                  : "border-2 border-gray-300"
              }  flex-1  mx-2 `}
            />

            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  book.readingStatus === "Reading" ||
                  book.readingStatus === "Read"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                2
              </div>
              <p className="text-sm mt-2">Reading</p>
            </div>
            <hr
              className={`h-1 ${
                book.readingStatus === "Read"
                  ? "border-2 border-green-500"
                  : "border-2 border-gray-300"
              }  flex-1  mx-2 `}
            />

            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  book.readingStatus === "Read"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                3
              </div>
              <p className="text-sm mt-2">Read</p>
            </div>
          </div>
          {/* Action Button */}
          <div className="text-center mt-6 md:mt-10">
            {book.email === users?.email && (
              <button
                onClick={handleStatusChanged}
                disabled={book.readingStatus === "Read"}
                className={`btn ${
                  book.readingStatus === "Read"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600  text-white"
                }`}
              >
                {book.readingStatus === "Want To Read"
                  ? "Mark as Reading"
                  : book.readingStatus === "Reading"
                  ? "Mark as Read"
                  : "Already Read"}
              </button>
            )}
          </div>
          {/* Review Section */}

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">💬 Reviews</h2>
            {reviews.length === 0 && <p>No reviews yet.</p>}

            <ul className="">
              {reviews
                .filter((review) => review.bookId == book._id)
                .map((review) => (
                  <li key={review._id} className=" p-3 rounded-md">
                    <div className="card w-full bg-base-100 card-md shadow-sm">
                      <div className="card-body">
                        <div>
                          <h2 className="card-title">{review.name}</h2>
                          <span className=" text-gray-500">
                            {review.createAt}
                          </span>
                        </div>
                        <p>{review.review}</p>
                        {users?.email === review.email && (
                          <div className=" mt-3 flex items-center gap-4  ">
                            <button
                              onClick={() => {
                                setUpdateReview(review);
                                document
                                  .getElementById("my_modal_1")
                                  .showModal();
                              }}
                              className="btn bg-purple-600 text-white"
                            >
                              Update Review
                            </button>
                            <dialog id="my_modal_1" className="modal">
                              <div className="modal-box">
                                <h3 className="font-bold text-lg">
                                  Update review
                                </h3>
                                <form
                                  onSubmit={handleUpdateReview}
                                  className="mt-6 space-y-2"
                                >
                                  <textarea
                                    rows="3"
                                    name="review"
                                    placeholder="Write your review..."
                                    className="w-full p-3 border rounded"
                                    defaultValue={updateReview.review}
                                  />
                                  <button
                                    type="submit"
                                    className="px-4 py-2 bg-purple-600 text-white rounded cursor-pointer"
                                  >
                                    Update Review
                                  </button>
                                </form>
                                <div className="modal-action">
                                  <form method="dialog">
                                    <button className="btn">Close</button>
                                  </form>
                                </div>
                              </div>
                            </dialog>
                            <button
                              onClick={() => handleDeleteReview(review._id)}
                              className="btn bg-red-500 text-white"
                            >
                              Delete Review
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <form onSubmit={handleReview} className="mt-6 space-y-2">
              <textarea
                rows="3"
                name="review"
                placeholder="Write your review..."
                className="w-full p-3 border rounded"
              />
              <button
                type="submit"
                disabled={!!hasReview}
                className={`px-4 py-2 rounded cursor-pointer ${
                  hasReview
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 text-white"
                }`}
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
