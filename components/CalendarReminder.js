import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

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

  return (
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
}

const StyledDay = styled.div`
  border: 1px solid black;
  margin: 10px;
`;

const StyledWeek = styled.section`
  border: 1px solid black;
`;
