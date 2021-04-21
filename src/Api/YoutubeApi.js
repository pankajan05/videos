import axios from 'axios';

const KEY = 'AIzaSyBQe1Ft6SwyePutqFVkWrYXVOGdoV0vO3I';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
       key: KEY,
        part: 'snippet'
    }
});
