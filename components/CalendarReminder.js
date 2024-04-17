import styled from "styled-components";

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
  return (
    <StyledWeek>
      <StyledDay>{`${day}.${month + 1}.${year}-${
        nameOfTheDay[dayName]
      }`}</StyledDay>
      <StyledDay>{`${day + 1}.${month + 1}.${year}-${
        nameOfTheDay[(dayName + 1) % 7]
      }`}</StyledDay>
      <StyledDay>{`${day + 2}.${month + 1}.${year}-${
        nameOfTheDay[(dayName + 2) % 7]
      }`}</StyledDay>
      <StyledDay>{`${day + 3}.${month + 1}.${year}-${
        nameOfTheDay[(dayName + 3) % 7]
      }`}</StyledDay>
      <StyledDay>{`${day + 4}.${month + 1}.${year}-${
        nameOfTheDay[(dayName + 4) % 7]
      }`}</StyledDay>
      <StyledDay>{`${day + 5}.${month + 1}.${year}-${
        nameOfTheDay[(dayName + 5) % 7]
      }`}</StyledDay>
      <StyledDay>{`${day + 6}.${month + 1}.${year}-${
        nameOfTheDay[(dayName + 6) % 7]
      }`}</StyledDay>
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
