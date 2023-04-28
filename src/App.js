import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* Local imports */
import Home from './components/Home'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
