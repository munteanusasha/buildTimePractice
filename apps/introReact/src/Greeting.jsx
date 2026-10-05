import PropTypes from 'prop-types'
function Greeting(props){
    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please login</h2>

    return props.isLoggedIn ? welcomeMsg : loginPrompt;
}

Greeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
Greeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default Greeting