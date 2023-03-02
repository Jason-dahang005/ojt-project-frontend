import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://d262-143-44-191-101.ap.ngrok.io/api'
});

// export const setToken = (token) => Cookie.set('oToken', token);

Axios.interceptors.request.use((config) => {
   
//    const token = Cookie.get('oToken');
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

Axios.defaults.headers.common['ngrok-skip-browser-warning']=true;
Axios.defaults.withCredentials = true;
Axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const response = error;
        if(response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
        } 
    } catch (error) {
        console.error(error);
    }

    throw error;
})
export default Axios;