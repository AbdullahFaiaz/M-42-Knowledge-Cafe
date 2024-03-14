import PropTypes from 'prop-types'

const Booked = ({booked}) => {
    return (
        <div>
            <div className='m-1 text-center py-5 rounded-md bg-white'>{booked.title}</div>
        </div>
    )
}

Booked.propTypes = {
    booked: PropTypes.array
}

export default Booked

