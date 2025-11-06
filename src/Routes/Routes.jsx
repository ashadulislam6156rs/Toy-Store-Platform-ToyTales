import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import ToysDetails from "../Pages/ToysDetails";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Loading from "../Loading/Loading";
import ForgetPassword from "../Pages/ForgetPassword";
import Toys from "../Pages/Toys";
import GiftCenter from "../Pages/GiftCenter";
import ErrorPage_404 from "../Error/ErrorPage_404";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <ErrorPage_404 />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home />,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/forgotpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/mygift",
        element: (
          <PrivateRoute>
            <GiftCenter />
          </PrivateRoute>
        ),
      },
      {
        path: "/toys/",
        loader: () => fetch("/data.json"),
        element: <Toys />,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/toydetails/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <ToysDetails />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;