import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="bg-red-200 md:w-[35%]">
            <h2>Bookmarked Blogs:{bookmarks.length}</h2>

            {
                bookmarks.map((get,idx)=> {
                    return(
                    <div className='m-1 rounded-md bg-white' key={idx}>
                        {get.title}
                    </div>
                    )
                })
            }

        </div>

    


    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;