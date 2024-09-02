// src/App.js
import React from 'react';
import Header from './components/Header';
import Weights from './Pages/Weights';
import WeightEdit from './Pages/WeightEdit';
import WeightCreate from './Pages/CreateWeight';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Container } from 'react-bootstrap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/weights",
    element: <Weights />,
  },
  {
    path: "/weights/:id",
    element: <WeightEdit  />,
  },
  ,
  {
    path: "/weights/create",
    element: <WeightCreate  />,
  }
]);

function App() {

 
  return (
    <div className="App">
      <Container>
        <Header />
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;