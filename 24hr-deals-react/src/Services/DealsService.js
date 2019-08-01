import Host from './Host';
import axios from 'axios';


const Deal = {
    getAllDeals: (callback) => {
        axios.get(`${Host}/getAllDealAndProductInfo`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    },
    getDealById: (id, callback) => {
        axios.get(`${Host}/deal/${id}`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    },
    getDProductById: (id, callback) => {
        axios.get(`${Host}/product/${id}`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    },
    getDealsByCategory: (catName, callback) => {
        axios.get(`${Host}/category/${catName}/deals`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    },
}

export default Deal;