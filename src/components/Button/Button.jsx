import PropTypes from "prop-types";

const Button =({ onClick }) => {
  return(
        <button type="button" onClick={onClick} className="Button">
          Load more
        </button>
      )   
}

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired
// };

export default Button;