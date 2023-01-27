import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./components/layouts/Layout";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "user",
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <User />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
