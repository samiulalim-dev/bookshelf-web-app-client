import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import MyBooks from "../Pages/MyBooks/MyBooks";
import AddBooks from "../Pages/AddBooks/AddBooks";
import Bookshelf from "../Pages/Bookshelf/Bookshelf";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Loading from "../Components/Loading/Loading";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import SeeBooks from "../Pages/SeeBooks/SeeBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/bookshelf",
        Component: Bookshelf,
        loader: () =>
          fetch("https://bookshelf-web-app-server.vercel.app/books"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/logIn",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBooks",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/addBooks",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:category",
        element: (
          <PrivateRoute>
            <SeeBooks></SeeBooks>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
