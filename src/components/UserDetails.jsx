import PropTypes from "prop-types";

// const UserDetails = (props) => {
//     return (
//         <div className="user-details" >
//             <h2>user details</h2>
//             <p>first name: {props.anyUser.firstName}</p>
//             <p>last name: {props.anyUser.lastName}</p>
//             <p>age: {props.anyUser.age}</p>
//         </div>
//     );
// };   // ИЛИ ТАК:
const UserDetails = ({anyUser}) => {
    return (
        <div className="user-details" >
            <h2>user details</h2>
            <p>first name: {anyUser.firstName}</p>
            <p>last name: {anyUser.lastName}</p>
            <p>age: {anyUser.age}</p>
            
        </div>
    );
}; 

UserDetails.propTypes = {
    anyUser: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    })
    
}

export default UserDetails;