import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import ViewProduct from "./component/ViewProduct";
import Body from "./component/Body";
import Home from "./component/Home";

function App() {
  // const Home = lazy(() => import("./component/Home"));

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "view/:id",
          element: <ViewProduct />,
        },
      ],
    },

    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
