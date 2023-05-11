import React from 'react';
import LibraryPage from './page/LibraryPage';
import AdminPage from './page/AdminPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const routes = [
  {
    path: '*',
    element: <LibraryPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  }
]

function App() {
  return (
    <div >
      <h2>Awesome website</h2>
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
