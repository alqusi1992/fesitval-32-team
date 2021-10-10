import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  margin: 5px;
  padding: 1.1rem 1.8rem 1.2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-family: Planeta, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 1em;
  cursor: pointer;
  background-color: #610527;
  color: #fff;
  border: none;
  transition-duration: 150ms;
  &:hover {
    background-color: #9c093f;
  }
`;

export const InputWrapper = styled.input`
  border-radius: 25px;
  border: 1px solid gray;
  margin: 10px;
  padding: 10px 30px 5px 15px;
  &:focus {
    outline: none;
  }
`;

export const PWrapper = styled.p`
  color: red;
`;
