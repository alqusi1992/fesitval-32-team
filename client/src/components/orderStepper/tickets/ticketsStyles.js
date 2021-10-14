import styled from 'styled-components';

// export const TicketsWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin: 10px;
//   padding: 10px;
//   border-bottom: 1px solid black;
// `;

export const ButtonWrapper = styled.button`
  padding: 15px;
  width: 100%;
  border: none;
  background-color: #e92b5a;
  color: #fff;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ButtonIconWrapper = styled.button`
  border: 1px solid #ddd;
  width: 100%;
  padding: 10px;

  background-color: #fff;
  cursor: pointer;
`;
