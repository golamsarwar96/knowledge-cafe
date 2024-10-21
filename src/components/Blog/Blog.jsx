import PropTypes from 'prop-types'; // ES6
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date,reading_time, hashtags} = blog;
    console.log(title);
    return (
        <div className='mb-10'>
            <img src={cover} alt={`cover title of the pic ${title}`}/>
            <div className='flex justify-between mt-5'> 
                <div className='flex mb-4'>
                    <img className="w-14 rounded-full object-cover "src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-md'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span>{reading_time} min read</span>
                    {/* main focus point */}
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-xl ml-2'><IoBookmarkOutline></IoBookmarkOutline></button>                    
                </div>
            </div>
            <h2 className='text-4xl mb-5 font-bold'>{title}</h2>
            <p>
                { 
                    hashtags.map((hashtag,idx)=> <span key={idx}><a href="">{hashtag}</a></span>)
                }
            </p>

            <button className='text-blue-500 font-bold underline text-sm' onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired

}
export default Blog;