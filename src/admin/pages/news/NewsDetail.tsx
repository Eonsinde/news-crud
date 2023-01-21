import { useEffect } from 'react';
import {
  useQuery,
  useQueryClient,
  QueryClient
} from 'react-query';
import { BounceLoader } from 'react-spinners'
import { useUI } from '../../context';
import { getNews } from '../../services/newsServices'


type Props = {}

const NewsDetail = (props: Props) => {
  const { dataId, setSidebarView } = useUI();

  // Access the client
  const queryClient:QueryClient = useQueryClient();

  useEffect(() => {
    document.title = `News CRUD | Dashboard | News | ${dataId}`;
  }, []);

  const {
    status,
    // isError,
    // error,
    data,
  } = useQuery(['news', dataId], () => getNews(dataId));

  // const deleteMutation = useMutation(deleteNews, {
  //   onSuccess: () => {
  //       queryClient.invalidateQueries('news');
  //   }
  // });

  // console.log(dataId, data);

  return (
    <section>
      {
        (status === 'loading')
        ?
        <div className='absolute h-full w-full flex justify-center items-center'>
          <BounceLoader color='#9f1239' />
        </div>
        :
        <>
          <div>
            <img
              className='h-64 w-full object-cover' 
              src={data.NewsUrl} 
              alt={`${data.Id}`} 
            />
          </div>
          <div className='flex flex-col py-4 px-5 space-y-4'>
            <div>
              <h3 className="text-lg font-bold">Detail {`(${data.Id})`}</h3>
              <p>{data.NewsDetails}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Image</h3>
              <p>{data.NewsImage}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Date Created</h3>
              <p>{data.DateCreated}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Last Modification Date</h3>
              <p>{data.DateModified}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Status</h3>
              <p>{data.Status === 1 ? 'Active' : 'Not Active'}</p>
            </div>
            <div className='flex space-x-2 flex-wrap'>
              <button onClick={() => { setSidebarView('UPDATE_NEWS', dataId) }} className="bg-neutral-700 text-white py-2 px-3">Update News</button>
              <button className="bg-rose-800 text-white py-2 px-3">Delete News</button>
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default NewsDetail