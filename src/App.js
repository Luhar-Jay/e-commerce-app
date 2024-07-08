import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import ViewProduct from "./component/ViewProduct";
import Body from "./component/Body";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
import { ToastContainer } from "react-toastify";

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
        {
          path: "cart",
          element: <Cart />,
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
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
