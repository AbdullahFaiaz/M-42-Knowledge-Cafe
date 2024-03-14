import PropTypes from 'prop-types'; // ES6
// import cover from '../../assets/images/boy1.png'
const Blog = ({blog}) => {
    const {title} = blog 
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <img src="" alt="" />
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object
}
export default Blog;