import { useEffect, useState } from "react"
import axios from "axios"
import API_KEY, { YOUTUBE_LIST_VIDEOS } from "../constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setHomeVideo } from "../redux/appSlice"

const VideoContainer = () => {

  const dispatch = useDispatch()

  const { video, category } = useSelector(state => state.app)

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_LIST_VIDEOS}`)
      console.log(res?.data?.items);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);

    }
  }

  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (category === "All") {
      fetchVideo();
    } else {
      fetchVideoByCategory(category);
    }
  }, [category]);

  return (
    <div className="grid grid-cols-4 gap-3">
      {
        video.map(item => (
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} 
                key={typeof item.id === 'object' ? item.id.videoId : item.id }>
            <VideoCard item={item} />
          </Link>
        ))
      }

    </div>
  )
}

export default VideoContainer