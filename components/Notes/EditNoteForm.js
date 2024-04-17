import { useState } from "react";

export default function EditNoteForm({ editedNote, onSave, onCancel }) {
  const [editedText, setEditedText] = useState(editedNote);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={editedText}
        onChange={(event) => setEditedText(event.target.value)}
        rows={3}
        cols={30}
      />
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
