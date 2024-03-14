import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleClick}) => {
    
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
                blogs.map(blog=> <Blog key={blog.id} handleClick={handleClick} blog={blog}></Blog>)
            }
        </div>

    );
};
Blogs.propTypes = {
    handleClick: PropTypes.func
}
export default Blogs;