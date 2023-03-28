import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import Posts, { loader as postsLoader } from "./routes/Posts";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDatailsLoader } from "./routes/PostDetails";

import RootLayout from "./routes/RootLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary>
            <Posts />
          </ErrorBoundary>
        ),
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDatailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
