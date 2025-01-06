import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllEquipments from "../pages/AllEquipments";
import UserEquipments from "../pages/UserEquipments";
import AddEquipment from "../pages/AddEquipment";
import UpdateEquipment from "../pages/UpdateEquipment";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import PageLayout from "../layouts/PageLayout";
import UserLayout from "../layouts/UserLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import ViewEquipment from "../pages/ViewEquipment";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ChangePassword from "../pages/ChangePassword";
import Support from "../pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: async () => {
      try {
        const [equipments, popular, testimonials, category] = await Promise.all(
          [
            fetch("https://pha10-server.vercel.app/equipmentsLatest").then(
              (res) => res.json()
            ),
            fetch("https://pha10-server.vercel.app/equipmentsPopular").then(
              (res) => res.json()
            ),
            fetch("https://pha10-server.vercel.app/testimonials").then((res) =>
              res.json()
            ),
            fetch("https://pha10-server.vercel.app/equipmentsSports").then(
              (res) => res.json()
            ),
          ]
        );
        return { equipments, popular, testimonials, category };
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Response("Data fetch failed", { status: 500 });
      }
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <HomeLayout />,
    loader: () => fetch("https://pha10-server.vercel.app/equipmentsLatest"),
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/profile/",
        element: <Profile />,
      },
      {
        path: "/profile/update",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/",
        element: <Login />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/changePassword",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/pages/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pages/shop/",
        element: <AllEquipments />,
        loader: () => fetch("https://pha10-server.vercel.app/equipments"),
      },
      {
        path: "/pages/about",
        element: <About />,
      },
      {
        path: "/pages/support",
        element: <Support />,
      },
      {
        path: "/pages/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/equipments",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/equipments/myEquipments",
        element: (
          <PrivateRoute>
            {" "}
            <UserEquipments />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/equipments/add",
        element: (
          <PrivateRoute>
            {" "}
            <AddEquipment />{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("https://pha10-server.vercel.app/category"),
      },
      {
        path: "/equipments/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateEquipment />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pha10-server.vercel.app/equipments/${params.id}`),
      },
      {
        path: "/equipments/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewEquipment />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://pha10-server.vercel.app/equipments/${params.id}`),
      },
    ],
  },
]);

export default router;
