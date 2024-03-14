import PropTypes from 'prop-types'; // ES6
import { useState } from 'react';
// import cover from '../../assets/images/boy1.png'
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({handleClick,blog}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog 
    const [isBooked,setBooked] = useState(false)
    const handleBooked= () => {
        setBooked(!isBooked)
    }
    const allClicks = () => {
        handleClick(blog) 
        handleBooked()
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
                
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object,
    handleClick: PropTypes.func
}
export default Blog;