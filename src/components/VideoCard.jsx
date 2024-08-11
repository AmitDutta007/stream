import axios from "axios";
import { useEffect, useState } from "react";
import API_KEY, { BASE_URL } from "../constant";
import Avatar from "react-avatar";

const VideoCard = ({ item }) => {
    const [ytIcon, setYtIcon] = useState([]);
    const getYoutubeChannelName = async () =>{
        try {
            const res = await axios.get(`${BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
            console.log(res.data.items[0].snippet.thumbnails.high.url);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName();
    },[])
    return (
        <div className='w-94 cursor-pointer my-2'>
            <img className='rounded-xl w-full'
                 src={item.snippet.thumbnails.medium.url} 
                alt="ytvideo" />
            <div>
                <div className='flex mt-2'>
                    <Avatar src={ytIcon} size={35} round={true} />
                    <div className='ml-2'>
                        <h1 className='font-bold'>
                            {item.snippet.title}
                        </h1>
                        <p className='text-sm text-gray-500'>
                            {item.snippet.channelTitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard