import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';
import DashNav from './DashNav';
import DashAsideNav from './DashAsideNav';
import Sidebar from './Sidebar';
import { useUI } from './context';
import { ManagedUIContext } from './context';

// lazy load components
const NewsDetail:any = React.lazy(() => import('./pages/news/NewsDetail'));
const PostNews:any = React.lazy(() => import('./pages/news/PostNews'));
const UpdateNews:any = React.lazy(() => import('./pages/news/UpdateNews'));
// const UpdateNewsStatus:any = React.lazy(() => import('./pages/news/UpdateNews'));


type Props = {}

// this component renders the SideBar and determines what component is rendered in it 
const SidebarView: React.FC<{
  sidebarView: string
  closeSidebar(): any
  // links: LinkProps[]
}> = ({ sidebarView, closeSidebar }) => {
  return (
    <Sidebar onClose={closeSidebar} showCloseBtn>
      {sidebarView === 'BLANK_VIEW' && <>I am the based view for the sidebar menu</>}
      {sidebarView === 'NEWS_DETAIL' && <React.Suspense fallback={<div className='absolute h-full w-full flex justify-center items-center'><ClipLoader color='#9f1239' /></div>}><NewsDetail /></React.Suspense>}
      {sidebarView === 'POST_NEWS' && <React.Suspense fallback={<div className='absolute h-full w-full flex justify-center items-center'><ClipLoader color='#9f1239' /></div>}><PostNews /></React.Suspense>}
      {sidebarView === 'UPDATE_NEWS' && <React.Suspense fallback={<div className='absolute h-full w-full flex justify-center items-center'><ClipLoader color='#9f1239' /></div>}><UpdateNews /></React.Suspense>}
      {/* {sidebarView === 'UPDATE_NEWS_STATUS' && <React.Suspense fallback={<div className='absolute h-full w-full flex justify-center items-center'><ClipLoader color='#9f1239' /></div>}><UpdateNewsStatus /></React.Suspense>} */}
    </Sidebar>
  )
}

// this uses the context state of the to determine the props of the rendered SideBarView
const SidebarUI: React.FC<{}> = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  
  return displaySidebar ? (
    <SidebarView
      sidebarView={sidebarView}
      closeSidebar={closeSidebar}
    />
  ) : null
}

const Dashboard = (props: Props) => {
  useEffect(() => {
    document.title = `News App CRUD | Dashboard`;
  }, []);


  return (
    <ManagedUIContext>
      <section style={{height:'100vh', overflow: 'hidden'}} className='bg-neutral-800 px-3 md:px-2'>
        <DashNav />
        <section style={{height: '85vh'}} className=''>
            <div
              className='container h-full mx-auto flex flex-col md:flex-row items-center relative'
              style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
            >
              {/* aside menu */}
              <DashAsideNav />
              {/* main section */}
              <main className='bg-white shadow-lg overflow-hidden h-full w-full basis-full md:basis-4/5 translate-y-0 md:translate-y-0 translate-x-0 md:translate-x-1/4 py-6 px-2 sm:px-5'>
                <Outlet  />
                <SidebarUI />
              </main>
            </div>
        </section>
      </section>
    </ManagedUIContext>
  )
}

export default Dashboard;