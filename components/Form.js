import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

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

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    //delete entries from data
    delete data.Spring;
    delete data.Summer;
    delete data.Fall;
    console.log(checkedSeasons);
    // Filter the checked seasons based on the state
    const fertiliserSeason = Object.keys(checkedSeasons).filter(
      (season) => checkedSeasons[season]
    );
    console.log(fertiliserSeason);
    data.fertiliser_season = fertiliserSeason;

    const imageFile = formData.get("image");
    const imageUrl = await uploadImage(imageFile);
    data.image = imageUrl;

    onSubmit(data);
    entrySuccessful();
  }
  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "gallery-plant");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/ddqqfiwvi/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  };
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
      <input type="file" id="image" name="image" />

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
