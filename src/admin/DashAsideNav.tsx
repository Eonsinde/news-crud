import { NavLink } from 'react-router-dom';


const DashAsideNav = () => {
    return ( 
        <aside  
            // style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} whitespace-nowrap md:whitespace-wrap 
            className={`bg-neutral-800 border-2 border-neutral-700 border-b-app-red border-r-neutral-700 md:border-b-neutral-700 md:border-r-app-red md:absolute 
                    h-auto md:h-full w-full md:w-1/5 top-0 left-0 right-0 md:right-auto mx-auto py-0 md:py-10 rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-tl-lg md:rounded-bl-lg 
                    flex items-center overflow-hidden relative 
                `}
        >
            <ul className='w-full h-auto md:h-full overflow-y-hidden md:overflow-y-auto relative flex justify-start md:justify-center items-center flex-row md:flex-col scrollbar-hide md:scrollbar-default overflow-x-scroll md:overflow-x-hidden whitespace-nowrap md:whitespace-normal'>
            {/* <ul className='w-full h-auto md:h-full pt-72 md:mt-40 lg:pt-10 xl:pt-0 overflow-y-hidden md:overflow-y-auto relative flex justify-start md:justify-center items-center flex-row md:flex-col scrollbar-hide md:scrollbar-default overflow-x-scroll md:overflow-x-hidden whitespace-nowrap md:whitespace-normal'> */}
                {/* <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-app-red hover:text-app-red' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/home`}>Home</NavLink></li> */}
                {/* <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-app-red hover:text-app-red' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/user/${user.user_id}/profile`}>Profile</NavLink></li> */}
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/authors`}>Authors</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/genres`}>Genres</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/categories`}>Categories</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/blogs`}>Blogs</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/manage-news`}>News</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/adverts`}>Adverts</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/mindmaps`}>Mind Maps</NavLink></li>
                <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-rose-800 hover:text-rose-800' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/movies`}>Movies</NavLink></li>
                {/* <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-app-red hover:text-app-red' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/contacts`}>Contacts</NavLink></li> */}
                {/* <li className='w-full h-auto text-center md:text-left'><NavLink style={{ padding: '1.25rem', display: 'block' }} className={({isActive}) => isActive ? 'font-semibold h-auto text-app-red hover:text-app-red' : 'h-auto text-white hover:text-slate-200'} to={`/admin/dashboard/faqs`}>FAQs</NavLink></li> */}
            </ul>
            <li className="block md:hidden absolute top-0 right-0 bg-gradient-to-l from-[#121222b2] h-full w-4" />
        </aside>
    );
}
 
export default DashAsideNav;