import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import FriendDetails from "../Component/FriendDetails/FriendDetails";
import Status from "../Pages/Status/Status";
import ErrorFallback from "../Pages/Errorpage/Errorpage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => ({friends: fetch("/FriendData/FriendData.json").then(res => res.json())}),
        Component: Homepage
      },
      { path: 'timeline', Component: Timeline },
      { path: 'status', Component: Status },
      { path: 'friend/:friendName', 
        loader: () => ({friends: fetch("/FriendData/FriendData.json").then(res => res.json())}),
        Component: FriendDetails 
      },
    ],
    errorElement: <ErrorFallback></ErrorFallback>
  },
  {
    path: '*',
    Component: ErrorFallback
  }
])