import MenuList from "./menu-list";
import { PropTypes } from "prop-types";
import { menuItemDataShape } from "./data";
import "./styles.css";

function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

TreeView.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape(menuItemDataShape)),
};

export default TreeView;
