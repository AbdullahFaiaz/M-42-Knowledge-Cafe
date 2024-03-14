import { useEffect } from "react";
import { useState } from "react";

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
                blogs.map(get=> <img key={get.id} src={get.cover} alt="img" />)
            }
        </div>

    );
};

export default Blogs;