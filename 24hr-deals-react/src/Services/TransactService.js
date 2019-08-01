import Host from './Host';
import axios from 'axios';


const Profile = {
    getTransactByUser: (id, callback) => {
        axios.get(`${Host}/user/${id}/transactionHistory`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    },
    makeTransaction: () => {},
    getUserProfile(id, callback) {
        axios.get(`${Host}/user/${id}`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err)) 
    }
}

export default Profile;