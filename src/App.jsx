import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./components/layouts/Layout";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

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
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "user/:userId",
        element: <User />,
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
