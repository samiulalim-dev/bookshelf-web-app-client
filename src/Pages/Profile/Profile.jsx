import React, { use, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import AxiosInstance from "../../Hooks/AxiosInstance";

const Profile = () => {
  const { users } = use(AuthContext);
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];
  const [bookSummary, setBookSummary] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = AxiosInstance();

  useEffect(() => {
    axiosSecure.get(`email/${users.email}`).then((res) => {
      setBookSummary(res.data);
      setLoading(false);
    });
  }, []);

  const categoryArray = [];
  // console.log(categoryArray);

  bookSummary.forEach((book) => {
    const existing = categoryArray.find(
      (item) => item.category === book.category
    );

    if (existing) {
      existing.count += 1;
    } else {
      categoryArray.push({ category: book.category, count: 1 });
    }
  });

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      {/* User Info */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-base-200 p-6 rounded-xl shadow-md">
        <img
          src={users.photoURL}
          alt="Profile photo"
          className="w-24 h-24 rounded-full border-4 border-indigo-700"
        />
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-2xl font-bold text-indigo-700">
            {users.displayName}
          </h2>
          <p className="text-gray-600">{users.email}</p>
        </div>
      </div>

      {/* Bookshelf Summary */}
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bookshelf Summary</h3>
            <ul className="  space-y-2">
              <li>Total Books: {bookSummary.length}</li>
              <h2 className=" text-md font-semibold">Books by Category</h2>
              {categoryArray.map((cat, index) => (
                <div className="space-y-1" key={index}>
                  <li>
                    {cat.category}:{cat.count}
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryArray}
                  dataKey="count"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {categoryArray.map((empty, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
