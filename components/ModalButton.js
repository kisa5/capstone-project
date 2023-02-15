import styled, { css } from "styled-components";

export const ModalButton = styled.button`
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

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: #94c3dd;
      color: #fff;
    `}
`;
