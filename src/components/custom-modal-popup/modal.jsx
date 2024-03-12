import PropTypes from "prop-types";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          {header ? header : <h2>Header</h2>}
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is the modal body</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  onClose: PropTypes.func,
};
