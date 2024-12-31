import PropTypes from "prop-types";

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function Modal(props) {
  const { isOpen, onClose, onSelect } = props;
  const listMenu = [
    "Bánh tráng chấm",
    "Muối bò dầu tỏi",
    "Xike dẻo",
    "Sốt me",
    "Muối nhuyễn",
  ];
  if (!isOpen) return null;
  return (
    <div className="popup-modal absolute inset-0 bg-gray-600 bg-opacity-50 w-full h-full flex flex-wrap justify-center items-center">
      <div className=" bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-2">Select product</h2>
        <div className="list-wrapper">
          <ul className="list-menu">
            {listMenu.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
                className="cursor-pointer p-2 mb-2 rounded border hover:bg-gray-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={onClose} // close modal
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
