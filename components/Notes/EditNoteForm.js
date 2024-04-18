import { useState } from "react";
import styled from "styled-components";

export default function EditNoteForm({ editedNote, onSave, onCancel }) {
  const [editedText, setEditedText] = useState(editedNote);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={editedText}
        onChange={(event) => setEditedText(event.target.value)}
        rows={3}
        cols={30}
      />
      <div>
        <ButtonSubmit type="submit">Save</ButtonSubmit>
        <ButtonCancel type="button" onClick={onCancel}>
          Cancel
        </ButtonCancel>
      </div>
    </form>
  );
}

const ButtonSubmit = styled.button`
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  margin-right: 10px;
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const ButtonCancel = styled.button`
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;
