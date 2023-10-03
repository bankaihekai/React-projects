// npm install react-router-dom
// import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from './pages/Error';
import ProductDetailPage from "./pages/ProductDetailPage";

//alternative
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },

       // alternative to set default path 
       // { index: true, element: <HomePage /> }, 
       
      { path: "/Products", element: <Product /> },
      { path: "/Products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

// alternative (createRoutesFromElements, Route) // OLD JSX style
// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<Product />} />
//   </Route>
// );
// const router = createBrowserRouter(routerDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
