import styled from 'styled-components';

export const ModalContainer = styled.div`
  transition: opacity 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBackdrop = styled.div`
  background: #e9f4f4;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  opacity: 0.95;
`;
