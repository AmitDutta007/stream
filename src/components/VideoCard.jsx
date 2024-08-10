
const VideoCard = () => {
  return (
    <div className='w-94 cursor-pointer my-2'>
    <img className='rounded-xl w-full' 
    //  src={item.snippet.thumbnails.medium.url} 
     alt="ytvideo" />
    <div>
        <div className='flex mt-2'>
            {/* <Avatar src={ytIcon} size={35} round={true} /> */}
            <div className='ml-2'>
                <h1 className='font-bold'>
                    {/* {item.snippet.title} */}
                </h1>
                <p className='text-sm text-gray-500'>
                    {/* {item.snippet.channelTitle} */}
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default VideoCard