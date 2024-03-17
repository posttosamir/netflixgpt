import { createBrowserRouter } from "react-router-dom";
import Login from "../coomponent/Login";
import App from "../App";
import Body from "../coomponent/Body";
import Browse from "../coomponent/Browse";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
