import PropTypes from "prop-types";

export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

Suggestions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};
