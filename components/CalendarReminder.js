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
  console.log(" today is: ", day);
  const nameOfTheDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  const intervalDaysArray = ownedPlants.map((plant) => {
    switch (plant.water_need) {
      case "Low":
        return 7; // Every week
      case "Moderate":
        return 2; // Every 2nd day
      case "High":
        return 1; // Every day
      default:
        return 7; // Default to every week if water_need is not specified
    }
  });

  const ownedPlantsLow = ownedPlants.filter(
    (plant) => plant.water_need === "Low"
  );

  const ownedPlantsModerate = ownedPlants.filter(
    (plant) => plant.water_need === "Moderate"
  );

  const ownedPlantsHigh = ownedPlants.filter(
    (plant) => plant.water_need === "High"
  );

  return (
    <StyledWeek>
      <StyledDay>
        <StyledDate>{`${day}.${month + 1}.${year}-${
          nameOfTheDay[dayName]
        }`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            day % 2 === 0 ? plant.name : ""
          )}{" "}
          , {ownedPlantsLow.map((plant) => (day % 7 === 0 ? plant.name : ""))},{" "}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay>
        <StyledDate>{`${
          (day + 1) % numberOfDays === 0
            ? numberOfDays
            : (day + 1) % numberOfDays
        }.${month + 1}.${year}-${nameOfTheDay[(dayName + 1) % 7]}`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            (day + 1) % 2 === 0 ? plant.name : ""
          )}
          ,{" "}
          {ownedPlantsLow.map((plant) =>
            (day + 1) % 7 === 0 ? plant.name : ""
          )}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay>
        <StyledDate>{`${
          (day + 2) % numberOfDays === 0
            ? numberOfDays
            : (day + 2) % numberOfDays
        }.${month + 1}.${year}-${nameOfTheDay[(dayName + 2) % 7]}`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            (day + 2) % 2 === 0 ? plant.name : ""
          )}
          ,{" "}
          {ownedPlantsLow.map((plant) =>
            (day + 2) % 7 === 0 ? plant.name : ""
          )}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay>
        <StyledDate>{`${
          (day + 3) % numberOfDays === 0
            ? numberOfDays
            : (day + 3) % numberOfDays
        }.${month + 1}.${year}-${nameOfTheDay[(dayName + 3) % 7]}`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            (day + 3) % 2 === 0 ? plant.name : ""
          )}
          ,{" "}
          {ownedPlantsLow.map((plant) =>
            (day + 3) % 7 === 0 ? plant.name : ""
          )}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay>
        <StyledDate>{`${
          (day + 4) % numberOfDays === 0
            ? numberOfDays
            : (day + 4) % numberOfDays
        }.${month + 1}.${year}-${nameOfTheDay[(dayName + 4) % 7]}`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            (day + 4) % 2 === 0 ? plant.name : ""
          )}
          ,{" "}
          {ownedPlantsLow.map((plant) =>
            (day + 4) % 7 === 0 ? plant.name : ""
          )}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay>
        <StyledDate>{`${
          (day + 5) % numberOfDays === 0
            ? numberOfDays
            : (day + 5) % numberOfDays
        }.${month + 1}.${year}-${nameOfTheDay[(dayName + 5) % 7]}`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            (day + 5) % 2 === 0 ? plant.name : ""
          )}
          ,{" "}
          {ownedPlantsLow.map((plant) =>
            (day + 5) % 7 === 0 ? plant.name : ""
          )}
          {ownedPlantsHigh.map((plant) => plant.name)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay>
        <StyledDate>{`${
          (day + 6) % numberOfDays === 0
            ? numberOfDays
            : (day + 6) % numberOfDays
        }.${month + 1}.${year}-${nameOfTheDay[(dayName + 6) % 7]}`}</StyledDate>
        <StyledPlantsOfDay>
          {ownedPlantsModerate.map((plant) =>
            (day + 6) % 2 === 0 ? plant.name : ""
          )}
          ,{" "}
          {ownedPlantsLow.map((plant) =>
            (day + 6) % 7 === 0 ? plant.name : ""
          )}
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
