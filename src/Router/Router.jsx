import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import FriendDetails from "../Component/FriendDetails/FriendDetails";
import Status from "../Pages/Status/Status";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
        {index: true, Component: Homepage},
        {path: 'timeline', Component: Timeline},
        {path: 'status', Component: Status},
        {path: 'friend/:friendDetails', Component: FriendDetails}
    ]
  }
])