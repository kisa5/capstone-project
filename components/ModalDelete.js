import Modal from "@/components/Modal";
import styled from "styled-components";

export default function ModalDelete({
  appearModalDelete,
  handleDeleteProject,
  handleClose,
}) {
  function deleteAndClose() {
    handleDeleteProject();
    handleClose();
  }
  return (
    <Modal appear={appearModalDelete}>
      <div>
        <h1>Do you really want to delete your project?</h1>
        <div>
          <button onClick={handleClose}>No</button>
          <button oClick={deleteAndClose}>Yes</button>
        </div>
      </div>
    </Modal>
  );
}
