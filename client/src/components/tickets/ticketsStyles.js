import styled from 'styled-components';

export const TicketsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const ButtonWrapper = styled.button`
  margin: 20px;
  padding: 15px;
  justify-content: center;
  border: none;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
