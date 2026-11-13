import apiClient from "../../config/apiClient";
import type RegisterData  from "../../Models/RegisterData";


export const registerUser= async(signUpData : RegisterData)=>{
    const response= await apiClient.post('/Users/register', signUpData);
    return response.data;
}