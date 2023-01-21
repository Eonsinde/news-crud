import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { toast } from 'react-toastify';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';



interface ILoginFormData {
    username: string;
    password: string;
}

const Login = () => {
    let [showPassword, setShowPassword] = useState<boolean>(false);
    let [isLoading, setIsLoading] = useState<boolean>(false);
    let [formData, setFormData] = useState<ILoginFormData>({
        username: '',
        password: ''
    });

    const { register:RegisterField, handleSubmit:SubmitForm, formState: { errors } } = useForm(); // form validation

    // for our show password button
    const showPasswordInput = useRef<any>();

    useEffect(() => {
        document.title = `News CRUD App | Admin Login`;
    }, []);

    const handleShowPassword = (show: boolean) => {
        // change show password value and alter the tick on the checkbox input
        setShowPassword(show);
        showPasswordInput.current.checked = show;
        // console.log(showPasswordInput.current.checked);
    }

    const handleChange = (e: any) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = () => {
        // login user
        console.log('Op Login init')
    }

    return ( 
        <section style={{height: '100vh', width: '100vw'}} className="bg-neutral-800 flex flex-col justify-center items-center">
            <div className='w-4/6 md:w-2/4 mx-auto p-3 text-center'>
                <h1 className='text-white text-3xl sm:text-4xl md:text-5xl mb-1'>News CRUD Admin</h1>
            </div>
            <form 
                onSubmit={SubmitForm(handleSubmit)} 
                className='bg-white relative flex flex-col py-20 px-5 sm:px-8 md:px-16 w-11/12 sm:w-9/12 md:w-9/12 lg:w-4/12 mx-auto border-2 rounded-md'
                style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
            > 
                <div className='form-sect mb-4 md:mb-3 lg:mb-5'>
                    <input 
                        type='text' 
                        {...RegisterField("username", {required: true, maxLength: 50})} 
                        onChange={handleChange} 
                        className={`p-3 w-full border-solid border-2 border-gray-500 rounded-md shadow-sm 
                                focus:border-gray-200 focus:ring-4 focus:ring-gray-200   
                                ${errors.username?.type === 'required' ? 'focus:border-red-200 focus:ring-red-400' : '' } 
                                transition ease-in-out delay-150 bg-transparent`} 
                        placeholder='Username'  
                    />
                </div>
                <div className='form-sect mb-4 md:mb-3 lg:mb-5'>
                    <input 
                        type={`${showPassword ? 'text' : 'password'}`} 
                        {...RegisterField("password", { required: true, maxLength: 255 })} 
                        onChange={handleChange} 
                        className={`p-3 w-full border-solid border-2 border-gray-500 rounded-md shadow-sm 
                                focus:border-gray-200 focus:ring-4 focus:ring-gray-200   
                                ${errors.password?.type === 'required' ? 'focus:border-red-200 focus:ring-red-400' : '' } 
                                transition ease-in-out delay-150 bg-transparent`} 
                        placeholder='Password'
                    />
                </div>
                <div className='form-sect mb-4 md:mb-3 lg:mb-5 flex justify-start items-center space-x-3'>
                    <input type='checkbox' ref={showPasswordInput} onClick={() => handleShowPassword(!showPassword)} />
                    <Link to='#' className='flex justify-start items-center space-x-3 text-black hover:text-black' onClick={() => handleShowPassword(!showPassword)}>
                        <p>Reveal Password</p>
                    </Link>
                </div>
                <button 
                    disabled={isLoading ? true : false}
                    type='submit' 
                    className={`${!isLoading ? 'bg-rose-800' : 'bg-app-red-opacity animate-pulse'} text-white p-3 rounded-md shadow-sm focus:ring-4 focus:ring-red-200 transition ease-in-out delay-150`}
                >
                    {isLoading ? 'Submitting' : 'Login'}
                </button>
            </form>
            <div className='mt-5'>
                <p className='text-white'>Copyright <AiOutlineCopyrightCircle className='inline-block mx-1' /> {new Date().getFullYear()}; ALins</p>
            </div>
        </section>
    );
}
 
export default Login;