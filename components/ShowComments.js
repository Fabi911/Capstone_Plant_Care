import styled from "styled-components";

export default function ShowComments({ plant }) {
  return (
    <>
      <h3>Notes:</h3>
      <ShowNotesContainer>
        {plant.notes.map((note, index) => (
          <NoteText key={index}>{note}</NoteText>
        ))}
      </ShowNotesContainer>
    </>
  );
}

const ShowNotesContainer = styled.div`
  box-shadow: var(--box-shadow-default);
  background-color: var(--bg-color1);
  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80%;
  padding: 10px 0;
`;

const NoteText = styled.div`
  background-color: var(--main-color3);
  width: 90%;
  box-shadow: var(--box-shadow-default);
  border-radius: 5px;
`;
