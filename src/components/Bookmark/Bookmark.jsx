import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    console.log(title);
    return (
        <div className="bg-zinc-200 p-1">
            <h3 className="text-xl bg-white p-4 m-2 rounded-xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;