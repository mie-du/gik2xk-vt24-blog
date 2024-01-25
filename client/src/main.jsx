import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import PostEdit from './views/PostEdit.jsx';
import Posts from './views/Posts.jsx';
import PostDetail from './views/PostDetail.jsx';
import Home from './views/Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/posts/:id/edit',
        element: <PostEdit />
      },
      {
        path: '/posts/:id',
        element: <PostDetail />
      },
      {
        path: '/posts/new',
        element: <PostEdit />
      },
      {
        path: '/users/:id/posts',
        element: <Posts />
      },
      {
        path: '/tags/:tag/posts',
        element: <Posts />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
