import axios from "axios"
const USERS_URL = 'http://jsonplaceholder.typicode.com/users'
const POSTS_URL = 'http://jsonplaceholder.typicode.com/posts'


export const fetchUsers = async() =>{
    const {data} = await axios.get(USERS_URL)
    return data
}
export const fetchOneUser = async(id) =>{
    const {data} = await axios.get(USERS_URL+'/'+id)
    return data
}
export const fetchPosts = async() =>{
    const {data} = await axios.get(POSTS_URL)
    return data
}