export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const API_KEY = 'AIzaSyBilY87yTw4GsRJhFpCZ2aUaqIphDqN5Ic';
export const YOUTUBE_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';
export const YOUTUBE_LIST_VIDEOS = 
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`;
export default API_KEY;