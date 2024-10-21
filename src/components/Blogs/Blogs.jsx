import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const  [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        .catch(err=>console.log(err))
    },[])

    return (
        <div className="w-2/3">
            <h1 className="text-3xl my-3">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog =>
                <Blog key={blog.id} blog={blog}>
                </Blog>)
            
            }
        </div>
    );
};

export default Blogs;