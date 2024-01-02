import ButtonDetail from "./ButtonDetail";
import PropTypes from "prop-types";

export default function ButtonList({ typeBtn, onArchive, onDelete, onUnarchive }) {
  return typeBtn === "aktif" ? (
    <div className="absolute bottom-8 right-12 flex gap-4">
      <ButtonDetail typeBtn="arsipkan" onAction={onArchive} />
      <ButtonDetail typeBtn="hapus" onAction={onDelete} />
    </div>
  ) : (
    <div className="absolute bottom-8 right-12 flex gap-4">
      <ButtonDetail typeBtn="aktifkan" onAction={onUnarchive} />
      <ButtonDetail typeBtn="hapus" onAction={onDelete} />
    </div>
  );
}

ButtonList.propTypes = {
  typeBtn: PropTypes.oneOf(["aktif", "arsip"]).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

