import PropTypes from 'prop-types'; // ES6
import { useState } from 'react';
// import cover from '../../assets/images/boy1.png'
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({handleTime,handleClick,blog}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog 
    const [isBooked,setBooked] = useState(false)
    const handleBooked= () => {
        setBooked(!isBooked)
    }
    const allClicks = () => {
        handleClick(blog,isBooked) 
        handleBooked()
    }
    const [isRead,setIsRead] = useState(false)
    const handleIsRead= () =>{
        setIsRead(!isRead)
    }

    return (
        <div>
            <div className='sm:mb-[4vw] mb-[10vw]'>

                <img className='w-full' src={cover} alt={`cover of title ${title}`} />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-[2vw]'>
                        <div>
                            <img src={author_img} alt={`image of ${author}`}/>
                        </div>
                        <div>
                            <div>{author}</div>
                            <div>{posted_date}</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div>{`${reading_time} times read`}</div> <button onClick={allClicks} className={`${isBooked? "text-red-800" : "text-black"} text-2xl sm:text-4xl`}><FaRegBookmark /></button>
                    </div>

                </div>
                <h1 className='text-[6vw] sm:text-[4vw] md:text-[3vw]'>{title}</h1>
                <div>
                    {
                        hashtags.map((get,idx)=> <span key={idx}><a href="">#{get}</a> </span>)
                    }
                </div>
                <button className={`text-blue-400 underline ${isRead || "text-red-800"}`} onClick={()=> {
                    handleTime(reading_time,isRead)
                    handleIsRead()
                    }}>{!isRead? "Mark as Read":"Mark as unread"}</button>
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object,
    handleClick: PropTypes.func,
    handleTime: PropTypes.func
}
export default Blog;