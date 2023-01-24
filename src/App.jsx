import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Provider } from "react-redux";

import ErrorPage from "./pages/errorPage";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { AuthProvider } from "./context/AuthProvider";
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
