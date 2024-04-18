import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import useSWR from "swr";

export default function CalendarReminder() {
  const date = new Date();
  const dayName = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  const nameOfTheDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[month % 12];

  const [numberOfDays, setNumberOfDays] = useState(0);
  useEffect(() => {
    function handleMumberOfDays(month) {
      if (month === 1) {
        return setNumberOfDays(28);
      }
      if (
        month === 0 ||
        month === 2 ||
        month === 4 ||
        month === 6 ||
        month === 7 ||
        month === 9 ||
        month === 11
      ) {
        return setNumberOfDays(31);
      } else {
        return setNumberOfDays(30);
      }
    }
    handleMumberOfDays(month);
  }, [day]);

  const { data, mutate } = useSWR("/api/plants");
  console.log(data);
  const wateringSchedule = {
    Low: "Weekly",
    Moderate: "Every 2nd day",
    High: "Daily",
  };

  const ownedPlants = data
    ? data.filter((plant) => plant.isOwned === true)
    : [];

  const ownedPlantsLow = ownedPlants.filter(
    (plant) => plant.water_need === "Low"
  );

  const ownedPlantsModerate = ownedPlants.filter(
    (plant) => plant.water_need === "Moderate"
  );

  const ownedPlantsHigh = ownedPlants.filter(
    (plant) => plant.water_need === "High"
  );

  function watering(array, addDay, modulo) {
    return array.map((plant) =>
      (day + addDay) % modulo === 0 ? plant.name : ""
    );
  }

  function dateText(addDay) {
    return `${
      (day + addDay) % numberOfDays === 0
        ? numberOfDays
        : (day + addDay) % numberOfDays
    }.${month + 1}.${year}-${nameOfTheDay[(dayName + addDay) % 7]}`;
  }

  return (
    <StyledWeek>
    <h2>{monthName}</h2>
      <StyledDay>
        <StyledDate>{dateText(0)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 0, 2)} ,{" "}
          {watering(ownedPlantsLow, 0, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 1 > numberOfDays ? true : false}>
        <StyledDate>{dateText(1)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 1, 2)} ,{" "}
          {watering(ownedPlantsLow, 1, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 2 > numberOfDays ? true : false}>
        <StyledDate>{dateText(2)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 2, 2)} ,{" "}
          {watering(ownedPlantsLow, 2, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 3 > numberOfDays ? true : false}>
        <StyledDate>{dateText(3)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 3, 2)} ,{" "}
          {watering(ownedPlantsLow, 3, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 4 > numberOfDays ? true : false}>
        <StyledDate>{dateText(4)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 4, 2)} ,{" "}
          {watering(ownedPlantsLow, 4, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 5 > numberOfDays ? true : false}>
        <StyledDate>{dateText(5)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 5, 2)} ,{" "}
          {watering(ownedPlantsLow, 5, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 6 > numberOfDays ? true : false}>
      
        <StyledDate>{dateText(6)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 6, 2)} ,{" "}
          {watering(ownedPlantsLow, 6, 7)},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
    </StyledWeek>
  );
}

const StyledDay = styled.div`
  border: 1px solid black;
  margin: 10px;
  width: 100%;
`;

const StyledWeek = styled.section`
  border: 1px solid black;
`;

const StyledDate = styled.p``;

const StyledPlantsOfDay = styled.p``;
