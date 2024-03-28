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

export default function ReminderPage({ plants }) {
  const [plantsToWater, setPlantsToWater] = useState([]);
  const [plantsToFertilize, setPlantsToFertilize] = useState([]);

  const [day, nextDay] = useDayCount(0); // only for simulation

  let dayOfWeek;

  switch (day % 7) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      dayOfWeek = "";
  }

  useEffect(() => {
    // const today = new Date().getDay();   ---> deactivated for simulation

    const plantsToday = plants.filter((plant) => {
      if (plant.water_need === "High") {
        return true;
      } else if (plant.water_need === "Moderate") {
        return day % 2 === 0;
      } else if (plant.water_need === "Low") {
        return day === 0;
      }
      return false;
    });

    setPlantsToWater(plantsToday);
  }, [day]);

  useEffect(() => {
    const month = new Date().getMonth();
    const plantsSeason = plants.filter((plant) => {
      const seasons = plant.fertiliser_season;
      return seasons.filter((season) => {
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
    console.log("plantsSeason", plantsSeason);
    setPlantsToFertilize(plantsSeason);
  }, [plants]);

  return (
    <div>
      <WateringSchedule plantsToWater={plantsToWater} />
      <FertilizingSchedule plantsToFertilize={plantsToFertilize} />
      <p>Day of the week : {dayOfWeek}</p>
      <button onClick={nextDay}>Next day</button> {/* only for simulation */}
    </div>
  );
}
