import { useEffect } from "react"
import axios from "axios"
import { YOUTUBE_LIST_VIDEOS } from "../constant"
import VideoCard from "./VideoCard"

const VideoContainer = () => {



  const fetchVideo = async ()=>{



    try {
      const res = await axios.get(`${YOUTUBE_LIST_VIDEOS}`)
      console.log(res);
            
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchVideo()
  },[])

  return (
    <div>
        <VideoCard/>
    </div>
  )
}

export default VideoContainer