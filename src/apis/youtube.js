import axios from 'axios';

const KEY = 'AIzaSyBzqUHyuCO493YceRZr7byjrFhVO0mrxNc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});