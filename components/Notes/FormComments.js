import styled from "styled-components";

export default function FormComments({ onSubmit, plant, mutate }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    mutate()
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const await notes = [...plant.notes, data.notes];

    onSubmit({ notes: notes }, plant._id, mutate);

    event.target.reset();
    event.target.notes.focus();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="notes">Add a comment:</label>
      <textarea
        type="text"
        id="notes"
        name="notes"
        rows="3"
        cols="30"
        required
        maxLength={200}
        minLength={1}
      ></textarea>
      <ButtonSend type="submit">💐</ButtonSend>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 1px solid #404040;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  margin: 10px 0px;
`;

const ButtonSend = styled.button`
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border: none;
  box-shadow: var(--box-shadow-default);
  font-size: 1rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;
