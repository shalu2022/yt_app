import axios from 'axios';

const KEY = 'AIzaSyBk_QKLl_o27qAIusoAlJ1h2EQfGdHYGX0';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params : {
    part: 'snippet',
    maxResults: 5,
    key: KEY
   }
});


