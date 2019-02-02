import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://quotes-project-7a93a.firebaseio.com/'
});

export default instace;