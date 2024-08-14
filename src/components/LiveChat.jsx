import { useEffect } from "react";
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../redux/ChatSlice";
import { generateRandomMessage, generateRandomName } from "../redux/helper";

const LiveChat = () => {

    const message = useSelector((state) => state.chat.message);
    const dispatch = useDispatch();
    useEffect(()=>{
       const timer = setInterval(()=>{
            dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
        },1000)

        return(()=>{
            clearInterval(timer)
        })
        
    },[])

  return (
    <div>
        <div>
                {
                    message.map((item,idx) => {
                        return (
                            <ChatMessage key={idx} item={item}/>
                        )
                    })
                }

            </div>
    </div>
  )
}

export default LiveChat