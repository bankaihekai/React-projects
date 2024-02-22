import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./PageNotFound.tsx";
import Weather from "./Weather.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/weather/:cityName",
    element: <Weather />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
]);

export const StatusContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]); 

const Root = () => {
  const [logStatus, setLogStatus] = useState(false); 

  return (
    <React.StrictMode>
      {/* <App /> */}
      <StatusContext.Provider value={[logStatus, setLogStatus]}>
        <RouterProvider router={router} />
      </StatusContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
