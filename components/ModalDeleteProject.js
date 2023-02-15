import Modal from "@/components/Modal";
import styled from "styled-components";
import { ModalButton } from "./ModalButton";

export default function ModalDelete({
  appearModalDeleteProject,
  handleDeleteProject,
  handleClose,
}) {
  function deleteAndClose() {
    handleDeleteProject();
    handleClose();
  }
  return (
    <Modal appear={appearModalDeleteProject}>
      <StyledCard>
        <Question>Do you really want to delete your project?</Question>
        <Wrapper>
          <ModalButton type="button" onClick={handleClose}>
            No
          </ModalButton>
          <ModalButton type="button" onClick={deleteAndClose} variant="delete">
            Yes
          </ModalButton>
        </Wrapper>
      </StyledCard>
    </Modal>
  );
}

const StyledCard = styled.div`
  display: grid;
  align-items: flex-start;
  justify-items: center;
  background-color: rgb(250, 250, 250);
  width: 95vw;
  height: 30vh;
  border-radius: 5px;
  padding: 10px;
`;

const Question = styled.h1`
  text-align: center;
  font-size: 18px;
  color: #696969;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
