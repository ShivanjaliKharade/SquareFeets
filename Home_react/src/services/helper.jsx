
import axios from "axios";
export const BASE_URL='http://localhost:9292';//here we use server api port number

//provide object of Axios

export const myAxios=axios.create({
    baseURL:BASE_URL
});