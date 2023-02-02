import styled from "styled-components";
import ReactDOM from "react-dom";

export default function Modal({ show, children }) {
  const modalContent = show ? (
    <StyledModalOverlay>{children}</StyledModalOverlay>
  ) : null;

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}

const StyledModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;
