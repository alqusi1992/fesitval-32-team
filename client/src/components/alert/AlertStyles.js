import styled from 'styled-components';

export const AlertContainer = styled.div`
  max-width: 1170px;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin: 1rem auto;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-color: ${(props) => props.borderColor};
`;

export const AlertCancel = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
