import { useState } from "react";

const ButtonList = () => {

  const buttonList =
   ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"]

   const [active, setActive] = useState("All");


  return (
    <div className='flex w-full overflow-x-scroll no-scrollbar my-1'>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div key={index}>
              <button 
            //    onClick={() => { videoByTag(buttonName) }} 
               className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}>
               <span className="whitespace-nowrap">{buttonName}</span></button>
            </div>
          )
        })
      }

    </div>
  )
}

export default ButtonList