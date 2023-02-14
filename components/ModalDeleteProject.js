import Modal from "@/components/Modal";
import styled from "styled-components";

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
          <NoButton onClick={handleClose}>No</NoButton>
          <YesButton onClick={deleteAndClose}>Yes</YesButton>
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

const YesButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  background: #94c3dd;
  color: #fff;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`;

const NoButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  background: #fff;
  color: #94c3dd;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`;
