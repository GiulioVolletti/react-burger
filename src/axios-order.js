import axios from 'axios';

const defaulAxios = axios.create({
    baseURL: 'https://hamburger-e755a-default-rtdb.firebaseio.com'
})

export default defaulAxios;