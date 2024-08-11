import { useEffect, useState } from "react"
import axios from "axios"
import { YOUTUBE_LIST_VIDEOS } from "../constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer = () => {

  const [video, setVideo] = useState([])




  const fetchVideo = async () => {



    try {
      const res = await axios.get(`${YOUTUBE_LIST_VIDEOS}`)
      console.log(res?.data?.items);
      setVideo(res?.data?.items)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchVideo()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-3">
      {
        video.map(item => (
          <Link key={item.id} to={`/watch?v=${item.id}`}>
            <VideoCard  item={item} />
          </Link>
        ))
      }

    </div>
  )
}

export default VideoContainer