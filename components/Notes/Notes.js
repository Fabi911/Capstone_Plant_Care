import styled from "styled-components";
import FormComments from "./FormComments";
import ConfirmDelete from "../ConfirmDelete";
import Image from "next/image";
import { useState } from "react";
import trash_icon from "@/public/img/trash.png";

export default function Notes({ plant, handleDeleteNote, onAddNotes, mutate }) {
  const handleOnClickNote = (index) => {
    const updatedNote = [...plant.notes];
    updatedNote.splice(index, 1);
    plant.notes = updatedNote;
    handleDeleteNote(plant, plant._id, mutate);
    setConfirmDelete(null);
  };

  const [confirmDelete, setConfirmDelete] = useState(null);

  function handleDelete(index) {
    setConfirmDelete(index);
  }

  function handleCancel() {
    setConfirmDelete(null);
  }

  console.log("Data", plant.notes);
  return (
    <>
      <NotesContainer>
        <h3>Notes:</h3>
        <FormComments onSubmit={onAddNotes} plant={plant} mutate={mutate} />
        <ShowNotesContainer>
          {plant.notes.map((note, index) => (
            <TextContainer key={index}>
              <NoteText>{note}</NoteText>
              <ButtonDeleteNote onClick={() => handleDelete(index)}>
                <Image src={trash_icon} alt="arrow" height={25} width={25} />
              </ButtonDeleteNote>
            </TextContainer>
          ))}
        </ShowNotesContainer>
      </NotesContainer>

      {confirmDelete !== null && (
        <ConfirmDelete
          handleConfirm={() => handleOnClickNote(confirmDelete)}
          handleCancel={handleCancel}
          mutate={mutate}
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
