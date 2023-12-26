import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product-list/components/ProductDetails';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout> </Checkout>,
  },
  {
    path:"/product-details",
    element: <ProductDetailsPage></ProductDetailsPage>
  }
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;