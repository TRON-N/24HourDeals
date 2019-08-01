import Host from './Host';
import axios from 'axios';


const Transaction = {
    getTransactByUser: (id, callback) => {
        axios.get(`${Host}/user/${id}/transactionHistory`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    }
}

export default Transaction;