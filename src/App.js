import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "contact-us",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
