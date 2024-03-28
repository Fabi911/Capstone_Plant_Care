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
  gap: 0.5rem;
`;

export default function Form({ onSubmit, entrySucessful }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    delete data.Spring;
    delete data.Summer;
    delete data.Fall;

    const fertiliserSeason = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((checkbox) => {
        fertiliserSeason.push(checkbox.value);
      });

    data.fertiliser_season = fertiliserSeason;
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
      <select id="water_need" name="water_need" required>
        <option value="Low">weekly</option>
        <option value="Moderate">2 times a week</option>
        <option value="High">daily</option>
      </select>
      <Label htmlFor="image">Image</Label>
      <input
        type="URL"
        id="image"
        name="image"
        maxLength={1}
        placeholder="not allowed"
      />
      <fieldset>
        <legend>fertiliser season</legend>
        <Label htmlFor="Spring">Spring</Label>
        <input type="checkbox" id="Spring" name="Spring" value="Spring" />
        <Label htmlFor="Summer">Summer</Label>
        <input type="checkbox" id="Summer" name="Summer" value="Summer" />
        <Label htmlFor="Fall">Fall</Label>
        <input type="checkbox" id="Fall" name="Fall" value="Fall" />
      </fieldset>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
