import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
            <div className="flex w-[96%] py-3 justify-between items-center">

                <div className="flex items-center ">
                    <GiHamburgerMenu size="24px" className="cursor-pointer" />

                    <img className="pl-8" width={"140px"}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt="yt_logo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar