import { Avatar } from "antd";


export const DashSpinnerLoader = (props:any) => {
    return ( 
        <div className="w-full h-full flex justify-center items-center">
            <svg
                style={{...styles.svg}}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                xmlSpace="preserve"
                {...props}
            >
                <path
                    fill="#d43f3f"
                    d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
                >
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
        </div> 
    );
}

export const ProfileDetailsLoader = () => {
    return (
        <div className='user-details flex flex-col justify-start items-center lg:items-start'>
            <div className='bg-gray-200 h-6 w-72 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-60 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-52 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-40 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-32 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-36 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-32 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-36 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-60 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-64 animate-pulse rounded mb-6'></div>
            <div className='bg-gray-200 h-6 w-72 animate-pulse rounded mb-6'></div>
        </div>
    )
}

export const TableLoader = () => {
    return (
        <div className=''>
            <div className='bg-gray-200 h-10 w-full animate-pulse rounded mb-3'></div>
            <div className='bg-gray-200 h-10 w-full animate-pulse rounded mb-3'></div>
            <div className='bg-gray-200 h-10 w-full animate-pulse rounded mb-3'></div>
        </div>
    )
}

export const ProfileImageLoader = () => {
    return (
        <figure className='flex flex-col justify-center items-center space-y-3 mb-8 lg:mb-0'>
            {
            
                <div style={{height:'250px', width: '250px'}} className='bg-gray-200 rounded-full animate-pulse'></div>
                
            }
            <div className='bg-gray-200 h-6 w-24 animate-pulse rounded mb-6'></div>
        </figure>
    )
}

export const AuthorLoader = () => {
    return (
        <figure className='bg-white border-2 py-5 px-3 border-white shadow-lg flex flex-col justify-center items-center rounded-md'>
            {
                <Avatar size={200} className="bg-gray-200 animate-pulse" />
                // <div style={{height:'250px', width: '100%'}} className='bg-gray-200 rounded-full animate-pulse mb-3'></div>
            }
            <div className='bg-gray-200 h-6 w-4/6 animate-pulse rounded mt-3'></div>
        </figure>
    )
}

export const BlogLoader = () => {
    return (
        <figure className='bg-white border-2 border-white shadow-lg flex flex-col justify-center items-center rounded-tl-md rounded-tr-md'>
            <div style={{height:'250px', width: '100%'}} className='bg-gray-200 animate-pulse rounded-tl-md rounded-tr-md'></div>
            <div className='bg-gray-200 h-6 w-10/12 animate-pulse rounded my-4'></div>
        </figure>
    )
}

export const AdvertLoader = () => {
    return (
        <figure className='bg-white border-2 border-white shadow-lg flex flex-col justify-center items-center rounded-tl-md rounded-tr-md'>
            <div style={{height:'250px', width: '100%'}} className='bg-gray-200 animate-pulse rounded-tl-md rounded-tr-md'></div>
        </figure>
    )
}

export const FaqLoader = () => {
    return (
        <figure className='bg-white border-2 border-white p-3 shadow-lg flex flex-col justify-center items-center rounded'>
            <div className='bg-gray-200 h-8 w-full animate-pulse rounded mb-3'></div>
            <div style={{height:'200px', width: '100%'}} className='bg-gray-200 animate-pulse rounded-tl-md rounded'></div>
        </figure>
    )
}

export const ContactLoader = () => {
    return (
        <figure className='bg-white border-2 border-white p-3 shadow-lg flex flex-col justify-center items-center rounded'>
            <div className='bg-gray-200 h-8 w-full animate-pulse rounded mb-3'></div>
            <div className='bg-gray-200 h-8 w-full animate-pulse rounded mb-3'></div>
            <div style={{height:'200px', width: '100%'}} className='bg-gray-200 animate-pulse rounded-tl-md rounded'></div>
        </figure>
    )
}

export const MindMapsLoader = () => {
    return (
        <figure className='bg-white border-2 border-white shadow-lg flex flex-col justify-center items-center rounded-md'>
            <div style={{height:'250px', width: '100%'}} className='bg-gray-200 animate-pulse rounded-md'></div>
        </figure>
    )
}


const styles:any = {
    svg: {
        width: '150px',
        height: '150px',
        display: 'block'
    }
}
 