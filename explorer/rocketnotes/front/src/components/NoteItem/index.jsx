import { FiPlus, FiX } from "react-icons/fi";
import { ContainerNoteItem } from "./styles";

const index = ({ isNew = false, value, onClick, ...props }) => {
  return (
    <ContainerNoteItem $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...props} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </ContainerNoteItem>
  );
};

export default index;
