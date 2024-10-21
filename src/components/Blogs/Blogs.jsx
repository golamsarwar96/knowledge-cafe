import { useState, useEffect } from "react";

const Blogs = () => {
    const  [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <p>Blogs : {blogs.length}</p>
        </div>
    );
};

export default Blogs;