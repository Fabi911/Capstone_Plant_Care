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
  console.log(ownedPlants);

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

  console.log(intervalDaysArray);

  return (
    <StyledWeek>
      {[...Array(7)].map((_, index) => {
        const dayIndex = (day + index) % numberOfDays;
        return (
          <StyledDay key={index}>
            {`${dayIndex}.${month + 1}.${year}-${
              nameOfTheDay[(dayName + index) % 7]
            }`}
            {/* Render plant information for the current day */}
            {ownedPlants.map((plant, plantIndex) => {
              const intervalDays = intervalDaysArray[plantIndex];
              if (
                plantIndex % intervalDays === 0 &&
                intervalDays !== 0 &&
                index % intervalDays === 0
              ) {
                return (
                  <div key={plantIndex}>
                    {plant.name} - Watering:{" "}
                    {wateringSchedule[plant.water_need]}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </StyledDay>
        );
      })}
    </StyledWeek>
  );
}

/* return (
    <StyledWeek>
      <StyledDay>{`${day}.${month + 1}.${year}-${
        nameOfTheDay[dayName]
      }`}</StyledDay>
      <StyledDay>{`${
        (day + 1) % numberOfDays === 0 ? numberOfDays : (day + 1) % numberOfDays
      }.${month + 1}.${year}-${nameOfTheDay[(dayName + 1) % 7]}`}</StyledDay>
      <StyledDay>{`${
        (day + 2) % numberOfDays === 0 ? numberOfDays : (day + 2) % numberOfDays
      }.${month + 1}.${year}-${nameOfTheDay[(dayName + 2) % 7]}`}</StyledDay>
      <StyledDay>{`${
        (day + 3) % numberOfDays === 0 ? numberOfDays : (day + 3) % numberOfDays
      }.${month + 1}.${year}-${nameOfTheDay[(dayName + 3) % 7]}`}</StyledDay>
      <StyledDay>{`${
        (day + 4) % numberOfDays === 0 ? numberOfDays : (day + 4) % numberOfDays
      }.${month + 1}.${year}-${nameOfTheDay[(dayName + 4) % 7]}`}</StyledDay>
      <StyledDay>{`${
        (day + 5) % numberOfDays === 0 ? numberOfDays : (day + 5) % numberOfDays
      }.${month + 1}.${year}-${nameOfTheDay[(dayName + 5) % 7]}`}</StyledDay>
      <StyledDay>{`${
        (day + 6) % numberOfDays === 0 ? numberOfDays : (day + 6) % numberOfDays
      }.${month + 1}.${year}-${nameOfTheDay[(dayName + 6) % 7]}`}</StyledDay>
    </StyledWeek>
  );
} */

const StyledDay = styled.div`
  border: 1px solid black;
  margin: 10px;
`;

const StyledWeek = styled.section`
  border: 1px solid black;
`;
