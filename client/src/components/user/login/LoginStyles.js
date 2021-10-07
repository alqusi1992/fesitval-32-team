import styled from 'styled-components';

export const FormGroup = styled.div`
  text-transform: capitalize;
`;

export const FormLabel = styled.label`
  display: block;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 0.5rem;
`;

export const InputControl = styled.input`
  width: 100%;
  background: transparent;
  font-size: 1rem;
  padding: 10px 5px;
  border-radius: 5px;
  box-sizing: border-box;
`;
export const FieldsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
`;
export const BtnContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  & :hover {
    background: transparent;
    color: #222;
  }
`;

export const ButtonPrimary = styled.button`
  display: inline-block;
  text-decoration: none;
  letter-spacing: 3px;
  color: #ccc;
  background: #222;
  border: 3px solid #222;
  transition: all 0.3s linear;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1.1rem 1.3rem 1.2rem;
  border-radius: 25px;
`;
