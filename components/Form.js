import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import iconOwned from "../public/img/iconOwned.png";
import iconOverview from "../public/img/iconOverview.png";
import { toast } from "react-toastify";
import uploadImg from "../public/img/uploadImg.png";

export default function Form({ onSubmit, defaultData, formName, isEditMode }) {
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

    const response = await toast.promise(
      fetch("/api/upload", {
        method: "POST",
        body: formData,
      }),
      {
        pending: "Upload is pending",
        error: "Upload rejected 🤯",
      }
    );

    const { url } = await response.json();

    onSubmit({
      name: data.name,
      botanical_name: data.botanical_name,
      water_need: data.water_need,
      fertiliser_season: fertiliserSeason,
      image: url,
      isOwned: true,
    });
  }

  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedName(file ? file.name : "");
  };

  return (
    <StyledForm onSubmit={handleSubmit} aria-labelledby={formName}>
      {isEditMode ? (
        <Image src={iconOverview} width={80} height={80} alt="IconOverview" />
      ) : (
        <Image src={iconOwned} width={80} height={80} alt="IconOwned" />
      )}
      <Label htmlFor="name">Name</Label>
      <InputField
        type="text"
        id="name"
        name="name"
        required
        maxLength={150}
        defaultValue={defaultData?.name}
      />
      <Label htmlFor="botanical_name">Botanical Name</Label>
      <InputField
        type="text"
        id="botanical_name"
        name="botanical_name"
        required
        maxLength={150}
        defaultValue={defaultData?.botanical_name}
      />
      <Label htmlFor="water_need">Watering</Label>
      <Select
        id="water_need"
        name="water_need"
        required
        defaultValue={defaultData?.water_need}
      >
        <option value="Low">weekly</option>
        <option value="Moderate">2 times a week</option>
        <option value="High">daily</option>
      </Select>

      <FertiliserFieldset>
        <FertiliserLegend>Fertiliser Season</FertiliserLegend>
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
      </FertiliserFieldset>
      <div>
        <LabelImg htmlFor="image">
          Image*
          <StyledIcon src={uploadImg} alt="upload" width={30} height={30} />
        </LabelImg>
        <h3>{selectedName || "Click to upload"}</h3>
        <ImageInput
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required
          onChange={handleFileChange}
        />
      </div>
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
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
  min-width: 300px;
  max-width: 960px;
  width: 80vw;

  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;

const ButtonSubmit = styled.button`
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const InputField = styled.input`
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
  &:active {
    box-shadow: inset var(--box-shadow-default);
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 5px;
`;

const FertiliserFieldset = styled.fieldset`
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
`;

const FertiliserLegend = styled.legend`
  background: var(--main-color3);
  border: none;
  border-radius: 5px;
  box-shadow: var(--box-shadow-default);
`;

const StyledIcon = styled(Image)`
  cursor: pointer;
`;

const ImageInput = styled.input`
  display: none;
`;

const LabelImg = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
