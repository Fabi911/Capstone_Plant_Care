import styled from "styled-components";

export default function Modal({ onConfirm, onCancel, name }) {
  return (
    <>
      <Overlay />
      <DeleteConfirmBox>
        <p>
          Sure you want to delete this <strong>{name}</strong>?
        </p>
        <ButtonContainer>
          <DeleteButton type="button" onClick={onConfirm}>
            <strong>Delete</strong> 🗑️
          </DeleteButton>
          <CancelButton type="button" onClick={onCancel}>
            <strong>Cancel</strong> ❌
          </CancelButton>
        </ButtonContainer>
      </DeleteConfirmBox>
    </>
  );
}

const DeleteConfirmBox = styled.div`
  background: var(--bg-color1);
  padding: 50px;
  border-radius: 15px;
  position: fixed;
  top: 40%;
  left: auto;
  border: 2px solid red;
  z-index: 1000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const DeleteButton = styled.button`
  background: red;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  border: none;
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: inset var(--box-shadow-default);
  }
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const CancelButton = styled.button`
  background: green;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  border: none;
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: inset var(--box-shadow-default);
  }
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
