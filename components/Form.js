import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

export default function Form({ onSubmit, defaultData, formName }) {
  const [checkedSeasons, setCheckedSeasons] = useState({
    spring: false,
    summer: false,
    fall: false,
  });

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setCheckedSeasons((checkedSeason) => ({
      ...checkedSeason,
      [name]: checked,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const fertiliserSeason = Object.entries(checkedSeasons)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await response.json();

    onSubmit({
      name: data.name,
      botanical_name: data.botanical_name,
      water_need: data.water_need,
      fertiliser_season: fertiliserSeason,
      image: url,
    });
    // alert("Plant added successfully");
  }

  return (
    <StyledForm onSubmit={handleSubmit} aria-labelledby={formName}>
      <Label htmlFor="name">Name</Label>
      <input
        type="text"
        id="name"
        name="name"
        required
        maxLength={150}
        defaultValue={defaultData?.name}
      />
      <Label htmlFor="botanical_name">Botanical Name</Label>
      <input
        type="text"
        id="botanical_name"
        name="botanical_name"
        required
        maxLength={150}
        defaultValue={defaultData?.botanical_name}
      />
      <Label htmlFor="water_need">Watering</Label>
      <select
        id="water_need"
        name="water_need"
        required
        defaultValue={defaultData?.water_need}
      >
        <option value="Low">weekly</option>
        <option value="Moderate">2 times a week</option>
        <option value="High">daily</option>
      </select>
      <Label htmlFor="image">Image</Label>

      <input type="file" id="image" name="image" accept="image/*" />

      <fieldset>
        <legend>Fertiliser Season</legend>
        <Label htmlFor="Spring">Spring</Label>
        <input
          type="checkbox"
          id="spring"
          name="spring"
          value="spring"
          defaultChecked={defaultData?.fertiliser_season.includes("spring")}
          onChange={handleCheckboxChange}
        />
        <Label htmlFor="Summer">Summer</Label>
        <input
          type="checkbox"
          id="summer"
          name="summer"
          value="summer"
          defaultChecked={defaultData?.fertiliser_season.includes("summer")}
          onChange={handleCheckboxChange}
        />

        <Label htmlFor="Fall">Fall</Label>
        <input
          type="checkbox"
          id="fall"
          name="fall"
          value="fall"
          defaultChecked={defaultData?.fertiliser_season.includes("fall")}
          onChange={handleCheckboxChange}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

// styled components

const Label = styled.label`
  font-weight: bold;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: var(--main-color3);
  padding: 15px;
  border-radius: 15px;
  box-shadow: var(--box-shadow-default);
`;
