import './App.css';
import { BestSellers } from './BestSellers';
import { Header } from './Header';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Product } from './Product';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BestSellers />,
    },
    {
      path: "/",
      element: <Product />,
    }
  ]);

  return (
    <div className='appContainer'>
      <Header />
      <hr className="divider" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
