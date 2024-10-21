import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3">
            <div>
                <h3 className="text-3xl bg-black text-white p-2 rounded-lg mt-3"> Reading Time : {readingTime} Minutes</h3>
            </div>
            <h2 className="text-3xl my-3">Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.object,
    readingTime : PropTypes.number

}
export default Bookmarks;