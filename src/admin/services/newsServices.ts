import axios from 'axios';
import { BASE_URL } from '../../constant';


/***
    ****************************************************************
    For News: CRUD triggers for the News Model
    ****************************************************************
***/
export const fetchNewsByPage = async (pageNumber: number) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = await axios.get(`${BASE_URL}/News/GetAll?pageNumber=${pageNumber}&pageSize=20`, config);
    return request.data;
}

export const getNews = async (blog_id: number) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = await axios.get(`${BASE_URL}/News/GetById?Id=${blog_id}`, config);
    return request.data;
}

export const postNews = async (form_data: any) => {
    // const auth_tokens = JSON.parse(localStorage.getItem('auth_tokens'));

    const config = {
        headers: {
            // 'Authorization': `JWT ${auth_tokens.access}`,
            'Content-Type': 'application/json'
        }
    };

    const request = await axios.post(`${BASE_URL}/News/Create`, form_data, config);
    return request.data;
}

export const updateNews = async (form_data: any) => {
    // const auth_tokens = JSON.parse(localStorage.getItem('auth_tokens'));

    const config = {
        headers: {
            // 'Authorization': `JWT ${auth_tokens.access}`,
            'Content-Type': 'application/json'
        }
    };

    const request = await axios.post(`${BASE_URL}/News/Update/`, form_data, config);
    return request.data;
}

export const updateNewsStatus = async (form_data: any) => {
    // const auth_tokens = JSON.parse(localStorage.getItem('auth_tokens'));

    const config = {
        headers: {
            // 'Authorization': `JWT ${auth_tokens.access}`,
            'Content-Type': 'multipart/form-data'
        }
    };

    const request = await axios.patch(`${BASE_URL}/News/Status`, form_data, config);
    return request.data;
}

export const deleteNews = async (id: number) => {
    // const auth_tokens = JSON.parse(localStorage.getItem('auth_tokens'));

    const config = {
        headers: {
            // 'Authorization': `JWT ${auth_tokens.access}`,
            'Content-Type': 'application/json'
        }
    };

    const request = await axios.delete(`${BASE_URL}/news/${id}/`, config);
    return request.data;
}