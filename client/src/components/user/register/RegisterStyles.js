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
  color: #222;
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
  cursor: pointer;
  & svg {
    font-size: 2.5rem !important;
  }
  @media (min-width: 1099px) {
    right: -35px;
    top: -35px;
  }
`;

export const FieldsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
`;

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
