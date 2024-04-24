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
  const [plantsToFertilize, setPlantsToFertilize] = useState();
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

  useEffect(() => {
    const plantsSeason = ownedPlants.filter((plant) => {
      const seasons = plant.fertiliser_season;
      return seasons.some((season) => {
        if (season === "Spring") {
          return month >= 2 && month <= 4;
        } else if (season === "Summer") {
          return month >= 5 && month <= 7;
        } else if (season === "Fall") {
          return month >= 8 && month <= 10;
        }
        return false;
      });
    });
    setPlantsToFertilize(plantsSeason);
  }, [month]);
  console.log(plantsToFertilize);

  const { data, mutate } = useSWR("/api/plants");

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
      (day + addDay) % modulo === 0 ? (
        <li key={plant._id}>{plant.name}</li>
      ) : null
    );
  }

  function dateText(addDay) {
    const calculatedDay = ((day + addDay - 1) % numberOfDays) + 1;
    const calculatedDayName = (dayName + addDay) % 7;

    return (
      <>
        {calculatedDay}.{month + 1}.{year}
        <br />
        {nameOfTheDay[calculatedDayName]}
      </>
    );
  }

  return (
    <StyledWeek>
      <h2>{monthName}</h2>
      <ul>
        Fertilizing this month:
        <br></br>
        {Array.isArray(plantsToFertilize) &&
          plantsToFertilize.length > 0 &&
          plantsToFertilize.map((plant) =>
            plant.name ? <li key={plant._id}>{plant.name}</li> : null
          )}
      </ul>
      <StyledDay>
        <StyledDate>{dateText(0)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 0, 2)}
          {watering(ownedPlantsLow, 0, 7)}
          {watering(ownedPlantsHigh, 0, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 1 > numberOfDays ? true : false}>
        <StyledDate>{dateText(1)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 1, 2)}
          {watering(ownedPlantsLow, 1, 7)}
          {watering(ownedPlantsHigh, 1, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 2 > numberOfDays ? true : false}>
        <StyledDate>{dateText(2)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 2, 2)}
          {watering(ownedPlantsLow, 2, 7)}
          {watering(ownedPlantsHigh, 2, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 3 > numberOfDays ? true : false}>
        <StyledDate>{dateText(3)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 3, 2)}
          {watering(ownedPlantsLow, 3, 7)}
          {watering(ownedPlantsHigh, 3, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 4 > numberOfDays ? true : false}>
        <StyledDate>{dateText(4)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 4, 2)}
          {watering(ownedPlantsLow, 4, 7)}
          {watering(ownedPlantsHigh, 4, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 5 > numberOfDays ? true : false}>
        <StyledDate>{dateText(5)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 5, 2)}
          {watering(ownedPlantsLow, 5, 7)}
          {watering(ownedPlantsHigh, 5, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
      <StyledDay hidden={day + 6 > numberOfDays ? true : false}>
        <StyledDate>{dateText(6)}</StyledDate>
        <StyledPlantsOfDay>
          {watering(ownedPlantsModerate, 6, 2)}
          {watering(ownedPlantsLow, 6, 7)}
          {watering(ownedPlantsHigh, 6, 1)}
        </StyledPlantsOfDay>
      </StyledDay>
    </StyledWeek>
  );
}

const StyledDay = styled.div`
  border-radius: 10px;
  background-color: var(--bg-color1);
  box-shadow: var(--box-shadow-default);
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;

const StyledWeek = styled.section`
  border-radius: 15px;
  padding: 20px 0px;
  width: 80vw;
  box-shadow: var(--box-shadow-default);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--main-color3);
`;

const StyledDate = styled.p`
  border-right: 1px solid black;
  margin: 0 10px;
  padding: 10px;
  width: 40%;
  font-weight: bold;
  font-size: 0.7rem;
  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;

const StyledPlantsOfDay = styled.ul`
  width: 60%;
  font-size: 0.8rem;
  text-align: left;
  list-style-type: "💧 ";
  margin-left: -10px;

  @media (min-width: 901px) and (max-width: 1200px) {
    width: var(--card-tablet);
  }

  @media (min-width: 1201px) {
    width: var(--card-browser);
  }
`;
