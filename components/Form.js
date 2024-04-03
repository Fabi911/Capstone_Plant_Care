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

export default function Form({ onSubmit, defaultData, formName }) {
  const [checkedSeasons, setCheckedSeasons] = useState({
    Spring: false,
    Summer: false,
    Fall: false,
  });

  console.log("defaultData", defaultData);

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setCheckedSeasons((checkedSeason) => ({
      ...checkedSeason,
      [name]: checked,
    }));
  }
  function entrySuccessful() {
    return alert("Plant added successfully");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    //delete entries from data
    delete data.Spring;
    delete data.Summer;
    delete data.Fall;

    // Filter the checked seasons based on the state
    const fertiliserSeason = Object.entries(checkedSeasons).map(
      ([season]) => season
    );

    data.fertiliser_season = fertiliserSeason;
    onSubmit(data);
    entrySuccessful();
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
      <Label htmlFor="botanical_name">botanical name</Label>
      <input
        type="text"
        id="botanical_name"
        name="botanical_name"
        required
        maxLength={150}
        defaultValue={defaultData?.botanical_name}
      />
      <Label htmlFor="water_need">water need</Label>
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
      <input
        type="URL"
        id="image"
        name="image"
        disabled
        maxLength={0}
        placeholder="not allowed"
        defaultValue={defaultData?.image}
      />
      <fieldset>
        <legend>fertiliser season</legend>
        <Label htmlFor="Spring">Spring</Label>
        <input
          type="checkbox"
          id="Spring"
          name="Spring"
          value="Spring"
          defaultChecked={defaultData?.fertiliser_season.includes("Spring")}
          onChange={handleCheckboxChange}
        />
        <Label htmlFor="Summer">Summer</Label>
        <input
          type="checkbox"
          id="Summer"
          name="Summer"
          value="Summer"
          defaultChecked={defaultData?.fertiliser_season.includes("Summer")}
          onChange={handleCheckboxChange}
        />

        <Label htmlFor="Fall">Fall</Label>
        <input
          type="checkbox"
          id="Fall"
          name="Fall"
          value="Fall"
          defaultChecked={defaultData?.fertiliser_season.includes("Fall")}
          onChange={handleCheckboxChange}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
