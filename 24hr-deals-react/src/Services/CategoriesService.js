import Host from './Host';
import axios from 'axios';


const Category = {
    getCategories: (callback) => {
        axios.get(`${Host}/category`)
        .then(res => callback(res.data.data))
        .catch(err => console.log(err))
    }
}

export default Category