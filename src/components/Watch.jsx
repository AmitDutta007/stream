import { useSearchParams } from "react-router-dom"

const Watch = () => {

    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v');
    console.log(videoId);


    return (
        <div className='flex ml-4 w-[100%] mt-2'>
            <div className='flex w-[88%]'>
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>

                    </iframe>
                    {/* <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1> */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-between w-[35%]'>
                            <div className='flex'>
                                {/* <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} /> */}
                                {/* <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1> */}
                            </div>
                            <button className='px-4 py-1 font-medium bg-black text-white rounded-full'>Subscribe</button>
                        </div>
                        <div className='flex items-center w-[40%] justify-between mt-2'>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                {/* <AiOutlineLike size="20px" className='mr-5' />
                                <AiOutlineDislike size="20px" /> */}
                            </div>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                {/* <PiShareFatLight size="20px" className='mr-2' /> */}
                                <span>Share</span>
                            </div>
                            <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                                {/* <GoDownload /> */}
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch