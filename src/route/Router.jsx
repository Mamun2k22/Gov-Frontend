import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import DashboardLayout from "../componets/dashboard/DashboardLayout";
import Noticeboard from "../componets/dashboard/Noticeboard";
import TabComponent from "../componets/HorizontalTab.jsx/TabComponent";
import Teacher from "../componets/dashboard/teacher/Teacher";
import Student from "../componets/dashboard/student/Student";
import { Profile } from "../componets/dashboard/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },

  // Dashboard
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <TabComponent />,
      },
      {
        path: "notice",
        element: <Noticeboard />,
      },
      {
        path: "teacher",
        element: <Teacher />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
    ],
  },
]);
