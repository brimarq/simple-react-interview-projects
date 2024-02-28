import MenuItem from "./menu-item";
import { PropTypes } from "prop-types";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
}

const menuItemDataShape = {
  label: PropTypes.string,
  to: PropTypes.string,
};

menuItemDataShape.children = PropTypes.arrayOf(
  PropTypes.shape(menuItemDataShape)
);

MenuList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(menuItemDataShape)),
};

export default MenuList;
