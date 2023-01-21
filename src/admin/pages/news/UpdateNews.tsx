import { useState } from 'react'
import { useForm } from "react-hook-form";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  useQuery
} from 'react-query';
// icons import
import { ImSpinner9 } from 'react-icons/im';
import { IoIosClose } from 'react-icons/io';
import { Switch } from 'antd';
import { toast } from 'react-toastify';
// services import
import { useUI } from '../../context';
import { getNews, updateNews, updateNewsStatus } from '../../services/newsServices';



interface IFormState {
  newsDetails: string
  newsImage: any
  newsUrl: string
  regionId: number
  regulatorId: number 
  regulationId: number
}

type Props = {}

const UpdateNewsStatus = (props: Props) => {
  const { dataId } = useUI();
  const [formData, setFormData] = useState<IFormState>({
    newsDetails: '',
    newsImage: null,
    newsUrl: '',
    regionId: 1,
    regulatorId: 1, 
    regulationId: 1
  });
  const { register:RegisterField, handleSubmit:SubmitForm, formState: { errors } } = useForm(); // form validation

  // Access the client
  const queryClient:QueryClient = useQueryClient();

  const {
    status,
    // isError,
    // error,
    data:currentNewsData,
  } = useQuery(['news', dataId], () => getNews(dataId));

  const updateMutation = useMutation(updateNews, {
    onSuccess: () => {
        queryClient.invalidateQueries('news');
    }
  });

  const updateStatusMutation = useMutation(updateNewsStatus, {
    onSuccess: () => {
        queryClient.invalidateQueries('news');
    }
  });

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
          reject(error);
      };
    });
  };

  const truncate = (str:String, len:number) => {
    return str.length > len ? str.substring(0, len) + '...' : str;
  }

  const handleChange = (e:any) => {
    setFormData((prevState: any) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }));
  } 

  const handleSwitchChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const handleImgChange = async (e: any) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // set image 
    setFormData((prevState: any) => ({ ...prevState, newsImage: e.target.files[0] ? "Empty String once more" : null }));
  }

  const updateCurrentNews = () => {
    if (formData.newsImage === null) 
    {
      toast.error('News Image Required', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      updateMutation.mutate({ ...formData, id: dataId });
    }
  }

  return (
    <section className='py-12 px-5'>
      <h2 className='text-lg font-bold mb-3'>Update News | {dataId}</h2>
      { 
        (updateMutation.isSuccess || updateMutation.isError) 
        ? 
        <div 
            className={`form-msg-box py-3 px-2 mb-3 text-center flex justify-between items-center
            ${updateMutation.isSuccess ? 'bg-green-200' : 'bg-rose-200' }`}
        >
            <p>{updateMutation.isSuccess ? 'News Updated Successfully' : 'Failed to Update News'}</p>
            <button onClick={() => updateMutation.reset()}><IoIosClose size={30} /></button>
        </div> 
        : 
        <></>
      }
      <form onSubmit={SubmitForm(updateCurrentNews)}>
        <div className='form-sect mb-3'>
          <textarea 
            style={{maxHeight:'100px', minHeight:'80px',}} 
            {...RegisterField("newsDetails", {required: true})} 
            onChange={handleChange}
            className={`w-full border-2 border-neutral-400 p-2 outline-none 
              ${(errors.newsDetails?.type === 'required') ? 'border-rose-400 focus:border-rose-200 focus:ring-rose-400' : '' } 
              transition ease-in-out delay-150`}    
            value={formData.newsDetails}
            placeholder={`${status === 'loading' ? 'Enter News Details' : currentNewsData.NewsDetails}`}
          />
          { (errors.newsDetails?.type === 'required') 
            ? 
            <small className='text-rose-500'>
              This field is required
            </small>
            :
            <></>
          }
        </div> 
        <div className="form-sect mb-3">
          <input 
            type='text' 
            {...RegisterField("newsUrl", {required: true, pattern: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/})} 
            onChange={handleChange} 
            className={`w-full border-2 border-neutral-400 p-2 outline-none
                ${errors.newsUrl?.type === 'required' ? 'border-rose-400 focus:border-rose-200 focus:ring-rose-400' : '' } 
                transition ease-in-out delay-150 bg-transparent
            `}
            value={formData.newsUrl}
            placeholder={`${status === 'loading' ? 'Enter News Url' : currentNewsData.NewsUrl}`} 
          />
          { (errors.newsUrl?.type === 'pattern') || (errors.newsUrl?.type === 'required') 
            ? 
            <small className='text-rose-500'>
              {(errors.newsUrl?.type === 'pattern') 
                ?
                'This field requires a valid URL pattern'
                :
                'This field is required'
              }
            </small>
            :
            <></>
          }
        </div>
        <div className="form-sect mb-3">
          <input 
            type='file' 
            onChange={handleImgChange} 
            className={`w-full border-2 border-neutral-400 p-2 outline-none
                transition ease-in-out delay-150 bg-transparent
            `}
            // value={formData.newsImage === null ? '' : formData.newsImage.name}
            placeholder="Enter News Url" 
          />
        </div>
        <div className="form-sect mb-3">
          <div className='flex justify-between items-center w-full border-2 border-neutral-400 p-2 outline-none'>
            <label>Status</label>
            <Switch className='bg-neutral-400' onChange={handleSwitchChange} />
          </div>
        </div>
        <button 
          type='submit' 
          disabled={updateMutation?.isLoading ? true : false}
          className={`${!updateMutation?.isLoading ? 'bg-rose-800' : 'bg-rose-500 animate-pulse'} w-full text-white p-3 rounded-none shadow-sm focus:ring-4 focus:ring-red-200 transition ease-in-out delay-150`}
        >
          {
            updateMutation?.isLoading 
            ? 
            <div className='flex items-center justify-center space-x-2'><p>Submitting</p><ImSpinner9 className='text-white animate-spin' /></div> 
            : 
            <>Update</>
          }
        </button>
      </form>
    </section>
  )
}

export default UpdateNewsStatus