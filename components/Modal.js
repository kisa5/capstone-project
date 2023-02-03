import styled from "styled-components";
import ReactDOM from "react-dom";

export default function Modal({ appear, children }) {
  const modalContent = appear ? <StyledModal>{children}</StyledModal> : null;

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}

const StyledModal = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;
