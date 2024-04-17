import styled from "styled-components";

export default function ConfirmDelete({ handleConfirm, handleCancel }) {
  return (
    <>
      <DeleteConfirmBox>
        <p>Sure you want to delete?</p>
        <button type="button" onClick={handleConfirm}>
          Yes
        </button>
        <button type="button" onClick={handleCancel}>
          No
        </button>
      </DeleteConfirmBox>
    </>
  );
}

const DeleteConfirmBox = styled.div`
  background: var(--main-color1);
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 2px var(--box-shadow);
`;
