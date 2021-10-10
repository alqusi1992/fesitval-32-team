import styled from 'styled-components';

export const ModalContainer = styled.div`
  transition: opacity 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
`;

export const ModalBackdrop = styled.div`
  background: #000;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

export const Modal = styled.div`
  box-shadow: 0 0 15px 0 rgb(0 22 63 / 15%);
  -webkit-box-shadow: 0 0 15px 0 rgb(0 22 63 / 15%);
  border: 0 solid #f3f9f9;
  z-index: 2;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-height: 90vh;
  overflow: auto;
  max-width: 600px;
  background-color: white;
  color: #000;
  @media (min-width: 776px) {
    width: 70vw;
    padding: 4rem;
    overflow: unset;
  }
`;

export const CancelContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  cursor: pointer;
  & svg {
    font-size: 2.5rem !important;
  }
  @media (min-width: 1099px) {
    right: -35px;
    top: -35px;
  }
`;
export const LogInRegister = styled.p`
  color: blue;
  display: inline;
  &:hover {
    cursor: pointer;
  }
`;
