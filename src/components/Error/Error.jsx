import PropTypes from "prop-types";

const Error = ({ message }) => {
  console.log(message);
  return (
    <div style={{ color: "red", fontSize: "1.2rem", textAlign: "center" }}>
      <p>Error:</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
