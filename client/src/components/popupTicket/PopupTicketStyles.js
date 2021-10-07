import styled from "styled-components";

export const PopupTicketWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupInnerWrapper = styled.div`
  position: relative;
  padding: 30px;
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
