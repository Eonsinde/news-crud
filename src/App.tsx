import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
// css import
import 'react-toastify/dist/ReactToastify.css';
import PageTransitionLoader from './components/PageTransLoader';
import Dashboard from './admin/Dashboard';

// lazy load components
const Login:any = React.lazy(() => import('./admin/Login'));
const DashHome:any = React.lazy(() => import('./admin/pages/DashHome'));
const ManageNews:any = React.lazy(() => import('./admin/pages/news/ManageNews'));


// Create a client
const queryClient: QueryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "admin/accounts/login",
    element: 
      <Suspense fallback={<PageTransitionLoader className="z-10 h-screen" />}>
        <Login />
      </Suspense>,
  },
  {
    element: <Dashboard />,
    children: [
      {
        path: "admin/dashboard/home",
        element: 
          <Suspense fallback={<PageTransitionLoader className="z-10 h-full" />}>
            <DashHome />
          </Suspense>,
      },
      {
        path: "admin/dashboard/manage-news",
        element: 
          <Suspense fallback={<PageTransitionLoader className="z-10 h-full" />}>
            <ManageNews />
          </Suspense>,
      }
    ],
  },
]);


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
