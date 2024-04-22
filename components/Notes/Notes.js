import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import trash_icon from "@/public/img/trash.png";
import Modal from "../Modal";
import EditNoteForm from "./EditNoteForm";
import FormComments from "./FormComments";
import edit_icon from "@/public/img/edit.png";

export default function Notes({ plant, handleDeleteNote, onAddNotes, mutate }) {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleDelete = (index) => {
    setConfirmDelete(index);
  };

  const handleCreateNote = (index) => {
    const updatedNote = [...plant.notes];
    updatedNote.splice(index, 1);
    plant.notes = updatedNote;
    handleDeleteNote(plant, plant._id, mutate);
    setConfirmDelete(null);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleSaveEdit = (editedNote, index) => {
    const updatedNotes = [...plant.notes];
    updatedNotes[index] = editedNote;
    onAddNotes({ notes: updatedNotes }, plant._id, mutate);
    setEditingIndex(null);
  };

  return (
    <>
      <NotesContainer>
        <h3>Notes:</h3>
        <FormComments onSubmit={onAddNotes} plant={plant} mutate={mutate} />
        <ShowNotesContainer>
          {plant.notes.map((note, index) => (
            <TextContainer key={index}>
              {editingIndex === index ? (
                <EditNoteForm
                  editedNote={note}
                  onSave={(editedNote) => handleSaveEdit(editedNote, index)}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <>
                  <NoteText>{note}</NoteText>
                  <ButtonDeleteNote onClick={() => handleDelete(index)}>
                    <Image
                      src={trash_icon}
                      alt="arrow"
                      height={25}
                      width={25}
                    />
                  </ButtonDeleteNote>
                  <ButtonEditNote onClick={() => handleEdit(index)}>
                    <Image src={edit_icon} alt="trash" height={25} width={25} />
                  </ButtonEditNote>
                </>
              )}
            </TextContainer>
          ))}
        </ShowNotesContainer>
      </NotesContainer>

      {confirmDelete !== null && (
        <Modal
          onConfirm={() => handleCreateNote(confirmDelete)}
          onCancel={() => setConfirmDelete(null)}
          name="Note"
        />
      )}
    </>
  );
}

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 80%;
`;

const ShowNotesContainer = styled.div`
  box-shadow: var(--box-shadow-default);
  background-color: var(--bg-color1);
  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 90%;
  padding: 10px 0;
`;

const NoteText = styled.p`
  background-color: #fff;
  width: 90%;
  box-shadow: var(--box-shadow-default);
  border-radius: 5px;
  text-align: left;
  padding-left: 20px;
`;

const TextContainer = styled.div`
  position: relative;
  width: 80%;
`;

const ButtonDeleteNote = styled.button`
  position: absolute;
  top: 20px;
  right: -5px;
  background: transparent;
  border: none;
`;

const ButtonEditNote = styled.button`
  position: absolute;
  top: 20px;
  right: -35px;
  background: transparent;
  border: none;
`;
