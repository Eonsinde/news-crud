import { useEffect, useState } from 'react'
import {
    useQuery
} from 'react-query';
// icons import
import { FaAngleLeft, FaAngleRight, FaPlus } from 'react-icons/fa';
import { ImBin, ImSpinner9 } from 'react-icons/im';
import { useUI } from '../../context';
// components import
import { fetchNewsByPage, deleteNews } from '../../services/newsServices';
import { TableLoader } from '../../loaders/DashLoaders';
import { Link } from 'react-router-dom';



type Props = {}

const ManageNews = (props: Props) => {
    const [page, setPage] = useState<number>(1);
    const { openSidebar, setSidebarView } = useUI();

    useEffect(() => {
        document.title = `News CRUD | Dashboard | News`;
    }, []);

    const {
        status,
        // isError,
        // error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['news', page], () => fetchNewsByPage(page), { keepPreviousData : true });

    const truncate = (str:String, len:number) => {
        return str.length > len ? str.substring(0, len) + '...' : str;
    }

    return (
        <section className='p-4 absolute top-0 left-0 h-full w-full overflow-y-auto'>
            {
                (status === 'loading')
                ?
                <TableLoader />
                :
                <>
                    <header className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 bg-neutral-200 p-5">
                        <p className="font-semibold text-2xl md:text-lg">Manage News</p>
                        <div className='flex flex-col sm:flex-row items-center justify-center md:justify-end space-y-3 sm:space-y-0 sm:space-x-2'>
                            <button 
                                onClick={() => { openSidebar(); setSidebarView('POST_NEWS') }}
                                className="py-2 px-5 bg-neutral-800 text-white flex items-center justify-between space-x-4"
                            >
                                <span className='block'>Create</span>{' '}<FaPlus />
                            </button>
                            <button 
                                onClick={() => {}}
                                className="py-2 px-5 bg-rose-800 text-white flex items-center justify-between space-x-4"
                            >
                                <span className='block'>Remove All</span>{' '}<ImBin />
                            </button>
                        </div>
                    </header>
                    {
                        (data?.data?.length === 0)
                        ?
                        <h1 className='text-center bg-neutral-400 w-full font-semibold mt-6 p-6'>No News Created Yet</h1>
                        :
                        <>
                        <div className='mt-3 overflow-x-auto'>
                            <table className='table-auto w-[45rem] overflow-x-auto md:w-full mt-3 shadow-md scrollbar-hide'>
                                <thead className='bg-neutral-300'>
                                    <tr className=''>
                                        <th className='p-3'></th>
                                        <th className='p-3 text-center'>S/N</th>
                                        <th className='p-3 text-left'>Detail</th>
                                        <th className='p-3'>Date Created</th>
                                        <th className='p-3'>Last Modified</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { data?.data?.map((news:any, index:number) => (
                                        <tr key={index} className={`even:bg-neutral-200 odd:bg-neutral-100 border-2 ${false ? 'border-neutral-800' : 'border-neutral-50'}`}>
                                            <td className='p-3 text-center'>
                                                <input type='checkbox' onChange={e => {}} checked={false ? false : false} className='text-2xl p-2' />
                                            </td>
                                            <td className='p-3 text-center'>{index+1}</td>
                                            <td className='p-3 text-left capitalize'>
                                                <Link to='#' onClick={() => { openSidebar(); setSidebarView('NEWS_DETAIL', news.Id) }}>
                                                    {truncate(news.NewsDetails, 30)}
                                                </Link>
                                            </td>
                                            <td className='p-3 text-center'>{news.DateCreated}</td>
                                            <td className='p-3 text-center'>{news.DateModified}</td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                        {
                            // Logic for pagination
                            // (data.hasNextPage || data.hasPreviousPage)
                            (data?.pageSize >= 1)
                            ?
                            <div className=' py-3 flex items-center justify-center space-x-2'>
                                <button
                                    onClick={() => setPage(old => Math.max(old - 1, 1))}
                                    disabled={page === 1}
                                    className='bg-neutral-800 text-white rounded p-3 disabled:opacity-70'
                                >
                                    <FaAngleLeft />
                                </button>
                                <div className='py-3 px-5 bg-neutral-400 text-white rounded flex items-center justify-center space-x-2'>
                                    <p>{page}</p>
                                    {isFetching ? <ImSpinner9 className='text-white animate-spin' /> : ''}
                                </div>
                                <button
                                    onClick={() => {
                                        if (!isPreviousData && data.hasNextPage) {
                                            setPage(old => old + 1)
                                        }
                                    }}
                                    disabled={isPreviousData || !data?.hasNextPage}
                                    className='bg-neutral-800 text-white rounded p-3 disabled:opacity-70'
                                    // Disable the Next Page button until we know a next page is available
                                >
                                    <FaAngleRight />
                                </button>
                                {/* {isFetching ? <span> Loading...</span> : null}{' '} */}
                            </div>
                            :
                            <></>
                        }
                        </>
                    }
                    
                </>
            }  
        </section>
    )
}

export default ManageNews;