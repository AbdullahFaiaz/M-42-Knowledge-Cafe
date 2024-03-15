import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleTime,handleClick,handleRem,handleIsRead,isRead,handleBooked,isBooked}) => {
    
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
    return (

            <div className="md:w-[65%]">
            
            Length: {blogs.length}
            {
                blogs.map(blog=> <Blog key={blog.id} handleTime={handleTime} handleClick={handleClick} blog={blog} handleRem={handleRem} handleIsRead={handleIsRead} isRead={isRead} handleBooked={handleBooked} isBooked={isBooked}></Blog>)
            }
        </div>

    );
};
Blogs.propTypes = {
    handleClick: PropTypes.func,
    handleTime: PropTypes.func,
    handleRem: PropTypes.func,
    handleIsRead: PropTypes.func,
    isRead: PropTypes.bool,
    handleBooked: PropTypes.func,
    isBooked: PropTypes.bool
}
export default Blogs;