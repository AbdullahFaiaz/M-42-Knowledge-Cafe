import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
                blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>

    );
};

export default Blogs;