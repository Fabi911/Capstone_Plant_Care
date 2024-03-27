import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";

const Label = styled.label`
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Form({ onSubmit, entrySucessful }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    entrySucessful();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <input type="text" id="name" name="name" required maxLength={150} />
      <Label htmlFor="botanical_name">botanical name</Label>
      <input
        type="text"
        id="botanical_name"
        name="botanical_name"
        required
        maxLength={150}
      />
      <Label htmlFor="water_need">water need</Label>
      <input
        type="text"
        id="water_need"
        name="water_need"
        required
        maxLength={10}
      />
      <Label htmlFor="image">Image</Label>
      <input type="text" id="image" name="image" maxLength={150} />
      <Label htmlFor="fertiliser_season">fertiliser_season</Label>
      <input
        type="text"
        id="fertiliser_season"
        name="fertiliser_season"
        required
        maxLength={150}
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
