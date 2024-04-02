import FertilizingSchedule from "@/components/FertilizingSchedule";
import WateringSchedule from "@/components/WateringSchedule";
import { useEffect, useState } from "react";

function useDayCount(startDay) {
  const [day, setDay] = useState(startDay);
  function handleNextDay() {
    setDay(day + 1);
  }
  return [day, handleNextDay];
}

function useMonthCount(startMonth) {
  const [month, setMonth] = useState(startMonth);
  function handleNextMonth() {
    if (month < 11) {
      setMonth(month + 1);
    } else {
      setMonth(0);
    }
  }
  return [month, handleNextMonth];
}

export default function ReminderPage({ plants }) {
  const [plantsToWater, setPlantsToWater] = useState([]);
  const [plantsToFertilize, setPlantsToFertilize] = useState([]);

  const [day, nextDay] = useDayCount(0); // only for simulation

  const [month, nextMonth] = useMonthCount(0); // only for simulation

  const myPlants = plants.filter((plant) => plant.isOwned);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[day % 7];

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

  useEffect(() => {
    // const today = new Date().getDay();   ---> deactivated for simulation

    const plantsToday = myPlants.filter((plant) => {
      if (plant.water_need === "High") {
        return true;
      } else if (plant.water_need === "Moderate") {
        return day % 2 === 0;
      } else if (plant.water_need === "Low") {
        return day % 7 === 0; // % 7 only for simulation
      }
      return false;
    });

    setPlantsToWater(plantsToday);
  }, [day]);

  useEffect(() => {
    //const month = new Date().getMonth();   ---> deactivated for simulation
    const plantsSeason = myPlants.filter((plant) => {
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

  return (
    <div>
      <p>Current month : {monthName}</p>
      <p>Day of the week : {dayOfWeek}</p>
      <button onClick={nextMonth}>Next month</button>{" "}
      {/* only for simulation */}
      <button onClick={nextDay}>Next day</button> {/* only for simulation */}
      <WateringSchedule plantsToWater={plantsToWater} />
      <br />
      <FertilizingSchedule plantsToFertilize={plantsToFertilize} />
    </div>
  );
}
