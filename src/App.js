import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useSearchParams,
} from 'react-router-dom';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protectd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByidAsync } from './features/cart/cartSlice';
import { selectLogedInUser } from './features/auth/authSlice';
import { useEffect } from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected>
      <Home></Home>
    </Protected>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { 
    path: '/cart',
    element: <Protected><CartPage></CartPage></Protected>,
  },
  { 
    path: '/checkout',
    element: <Protected><Checkout></Checkout></Protected>,
  },
  { 
    path: '/product-detail/:id',
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
]);

function App() {
  const user=useSelector(selectLogedInUser);
  const dispatch=useDispatch();
  
    useEffect(()=>{
      if(user){
        dispatch(fetchItemsByidAsync(user.id));
      }
    },[dispatch,user])
  
 
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
