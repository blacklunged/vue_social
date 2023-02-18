import axios from "axios"
import jwtDecode from "jwt-decode"
const BASE_URL = 'http://localhost:5000/'

export const reigstration = async(nickname, password, name, surname) =>{
    const {data} = await axios.post(BASE_URL+'auth/registration',{nickname, password, name, surname})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async(nickname, password) =>{
    const {data} = await axios.post(BASE_URL+'auth/login',{nickname, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async() =>{
    
    const {data} = await axios.get(BASE_URL+'auth/check', {headers:{"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
    localStorage.setItem('token', data.token)
    return data
}