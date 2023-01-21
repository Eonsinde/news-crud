import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// import Swal from 'sweetalert2';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown, IoMdCloseCircle } from 'react-icons/io';
import './styles/nav.css';


type NavMenuProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const NavMenu = (props : NavMenuProps) => {
    const closeMenu = function(e : any){
        // console.log(e.target.classList);
        if (e.target.classList.contains('dash-nav-menu') && props.isOpen){
          props.setIsOpen(false);
        }
    };

    useEffect(() => {
        // event listener to remove backdrop
        document.addEventListener('click', closeMenu);
    
        // cleanup
        return () => document.removeEventListener('click', closeMenu); 
      }, [props.isOpen]);

    return (
        <nav className={`dash-nav-menu ${props.isOpen ? 'open' : ''} basis-4/5`}>
          <div className={`dash-nav-menu-nav-wrapper ${props.isOpen ? 'open' : ''}`}>
            <Link 
              to='#'
              className='dash-nav-close-btn block md:hidden rounded bg-transparent text-white hover:text-white py-1 px-3 absolute top-4 right-4 ' 
              onClick={(e) => {e.preventDefault(); props.setIsOpen(false)}}
            >
              <IoMdCloseCircle fontSize={30} />
            </Link>
            <ul className='dash-nav-menu-nav relative flex md:justify-end items-center space-y-10 md:space-y-0 space-x-0 md:space-x-6 lg:py-0'>
              {props.children}
            </ul>
          </div>
        </nav>
    );
}


type NavItemProps = {
    path: String;
    target?: React.HTMLAttributeAnchorTarget;
    children: React.ReactNode;
}

const NavItem = (props: NavItemProps) => {
    return (
      <li className={`dash-nav-item list-none text-lg`}>
        <NavLink 
            to={`${props.path}`} 
            target={props.target ? props.target : ''}
            className={({isActive}) => `${isActive ? 'text-rose-800 hover:text-rose-800' : 'text-white hover:text-slate-200'}`}
        >
            {props.children}
        </NavLink>
      </li>
    )
}


type NavDropdownProps = {
    title: String;
    children: React.ReactNode;
}

const NavDropdown = (props: NavDropdownProps) => {
    return (
        <li className={`dash-nav-item list-none text-lg relative`}>
            <NavLink 
                to={`#`} 
                className={({isActive}) => `${isActive ? 'text-app-red hover:text-app-red' : 'text-white hover:text-slate-200'}`}
            >
                {props.title}
            </NavLink>
            <div className='bg-red-200 absolute z-50'>
                {props.children}
            </div>
        </li>
    )
}


type NavDropdownUserProps = {
    user: any;
    children: React.ReactNode;
}

const NavDropdownUser = (props: NavDropdownUserProps) => {
    return (
        <li className={`list-none text-lg relative w-full md:w-auto px-2 md:px-0 group`}>
            <Link 
                to={`#`} 
                // className={({isActive}) => `${isActive ? 'text-app-red hover:text-app-red' : 'text-white hover:text-slate-200'}`}
                className={`text-white hover:text-slate-200`}
                // onClick={() => props.setDropdownOpen(!props.dropdownOpen)}
            >
                <figure className='flex flex-row justify-center items-center space-x-1'>
                    {
                        !props.user?.profile?.image
                        ?
                        <Avatar size={45} icon={<UserOutlined />} />
                        :
                        <Avatar size={45} src={props.user?.profile.image} />
                        // <img style={{ height: '45px', width: '45px' }} className="mx-auto rounded-full object-cover" src={props.user?.image} alt={`${props.user?.username}'s Avatar Img`} />
                    }
                    <span><IoMdArrowDropdown fontSize={20} /></span>
                    {/* <Link to='#' className='text-black hover:text-black'>Edit</Link> */}
                </figure>
            </Link>

            {/* Dropdown content */}
            {/* <div className={`${props.dropdownOpen ? 'block' : 'hidden'} group-hover:block absolute z-50 w-11/12 mx-auto md:w-60 top-14 md:right-0 bg-gray-700 md:bg-white shadow-2xl border-gray-700 md:border-white border-2 border-r-8 py-6 md:p-4 text-center md:text-left`}> */}
            <div className={`hidden group-hover:block absolute z-50 w-11/12 mx-auto md:w-60 top-14 md:top-12 md:right-0 bg-gray-700 md:bg-white shadow-2xl border-gray-700 md:border-white border-2 border-r-8 py-6 md:p-4 text-center md:text-left`}>
                {props.children}
            </div>
        </li>
    )
}


type NavDropdownItemProps = {
    path: String;
    target?: React.HTMLAttributeAnchorTarget;
    children: React.ReactNode;
}

const NavDropdownItem = (props: NavDropdownItemProps) => {
    return (
        <li className={`dash-nav-item list-none text-lg`}>
            <NavLink 
                to={`${props.path}`} 
                target={props.target ? props.target : ''}
                className={({isActive}) => `py-8 px-8 ${isActive ? 'text-app-red hover:text-app-red' : 'text-white hover:text-slate-200'}`}
            >
                {props.children}
            </NavLink>
        </li>
    )
}

const DashNav = () => {
    const { pathname } = useLocation();

    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        if (navOpen)
          setNavOpen(false);
    }, [pathname]);

    return ( 
        <nav className='h-[11vh] px-3 md:px-2'>
            <div className="container h-full mx-auto flex justify-between items-center relative">
                <div className='dash-nav-header flex justify-between items-center relative'>
                    <Link to='/admin/dashboard/home' className='block'>
                        <p className="text-white font-semibold text-lg">News CRUD</p>
                        {/* <img src={navLogo} alt='nav logo' height='250px' width='250px' /> */}
                    </Link>
                    <Link to='#' onClick={() => setNavOpen(true)} className='dash-nav-toggler md:hidden text-white hover:text-white focus-within:text-white text-3xl font-semibold'><GiHamburgerMenu /></Link>
                </div>
                <NavMenu isOpen={navOpen} setIsOpen={setNavOpen}>
                    <NavItem path='/admin/dashboard/home'>
                        Home
                    </NavItem>
                    <NavItem path='/admin/dashboard/QAs'>
                        Q{'&'}As
                    </NavItem>
                    <NavItem path='/admin/dashboard/faqs'>
                        FAQs
                    </NavItem>
                    <NavItem path='/admin/dashboard/contacts'>
                        Contacts
                    </NavItem>

                    {/* the drop down menu */}
                    {/* <NavDropdownUser user={actualUser} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen}> */}
                    <NavDropdownUser user={{username: "eonsinde"}}>
                        <Link 
                            to={`/admin/dashboard/user/1/profile`}
                            className='block text-white hover:text-white md:text-black md:hover:text-black'
                        >
                            My Profile 
                        </Link>
                        <Link 
                            to={`/admin/dashboard/manage-users`}
                            className='block my-6 md:my-4 text-white hover:text-white md:text-black md:hover:text-black'
                        >
                            Manage Users
                        </Link>
                        <Link 
                            to={`/admin/dashboard/subscribers`}
                            className='block my-6 md:my-4 text-white hover:text-white md:text-black md:hover:text-black'
                        >
                            Subscribers
                        </Link>
                        <Link 
                            to={`/admin/dashboard/send-mail`}
                            className='block my-6 md:my-4 text-white hover:text-white md:text-black md:hover:text-black'
                        >
                            Send Mail
                        </Link>
                        <Link 
                            to='/' 
                            target='_blank'
                            className='block my-6 md:my-4 text-white hover:text-white md:text-black md:hover:text-black'
                        >
                            Go To Site
                        </Link>
                        <Link 
                            to='#' 
                            onClick={() => {}}
                            className='block text-white hover:text-white md:text-black md:hover:text-black'
                        >
                            Logout
                        </Link>
                    </NavDropdownUser>
                </NavMenu>
            </div>
        </nav>
    );
}

// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top',
//     showConfirmButton: false,
//     timer: 1000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer)
//       toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
// });
 
export default DashNav;