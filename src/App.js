// src/App.js
import React from 'react';
import Home from './Pages/Home';
import Weights from './Pages/Weights';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;