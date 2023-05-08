import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* Local imports */
import Home, { mealsloader } from './components/Home'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      loader: mealsloader
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
