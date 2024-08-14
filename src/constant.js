export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const API_KEY = 'AIzaSyBilY87yTw4GsRJhFpCZ2aUaqIphDqN5Ic';
export const YOUTUBE_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';
export const SEARCH_SUGGESTIONS_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_LIST_VIDEOS = 
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=US&key=${API_KEY}`;

export const channelist = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${API_KEY}`;
export default API_KEY;