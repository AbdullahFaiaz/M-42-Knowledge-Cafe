import PropTypes from 'prop-types'
import Booked from '../Booked/Booked';
const Bookmarks = ({readTime,bookmarks}) => {
    
    return (
        <div className="bg-red-200 md:w-[35%]">
            <h2>Time: {readTime}</h2>
            <h2>Bookmarked Blogs:{bookmarks.length}</h2>

            {
                bookmarks.map((booked,idx)=> <Booked key={idx} booked={booked}></Booked>) 
            }

        </div>

    


    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}
export default Bookmarks;