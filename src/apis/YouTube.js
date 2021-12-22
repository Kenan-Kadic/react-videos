import axios from 'axios';

const KEY = 'AIzaSyBFI_brtAnsg1U8MEJe9EEpHv8xqwlrtjk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,

    }
});