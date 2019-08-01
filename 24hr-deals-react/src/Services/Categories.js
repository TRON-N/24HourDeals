import Host from './Host';
import axios from 'axios';


const Category = {
    getCategories: (callback) => {
        axios.get(`${Host}/category`)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}

export default Category