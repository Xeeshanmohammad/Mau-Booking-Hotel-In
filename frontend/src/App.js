
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/home/Home';
import Hotel from './Pages/hotel/Hotel';
import List from './Pages/List/List';


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element:<Home/>
    },
    {
      path: "/hotels", element:<List/>
    },
   {
    path: "/hotels/:id", element:<Hotel/>
   }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


