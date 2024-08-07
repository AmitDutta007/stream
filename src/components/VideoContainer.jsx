import { useEffect } from "react"
import axios from "axios"

const VideoContainer = () => {



  const fetchVideo = async ()=>{
    const res = await axios.get()
  }

  useEffect(()=>{
    fetchVideo()
  },[])

  return (
    <div>
        fgbbt
    </div>
  )
}

export default VideoContainer