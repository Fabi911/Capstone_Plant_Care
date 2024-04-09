import WateringSchedule from "@/components/WateringSchedule";
import { useEffect, useState } from "react";
import Image from "next/image";
import IconWater from "@/public/img/iconWater.png";

function useDayCount(startDay) {
  const [day, setDay] = useState(startDay);
  function handleNextDay() {
    setDay(day + 1);
  }
  return [day, handleNextDay];
}

export default function ReminderPage({ plants }) {
  const [plantsToWater, setPlantsToWater] = useState([]);

  const [day, nextDay] = useDayCount(0); // only for simulation

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

  return (
    <div>
      <Image src={IconWater} width={80} height={80} alt={name} />
      <p>Day of the week : {dayOfWeek}</p>
      {/* only for simulation */}
      <button onClick={nextDay}>Next day</button> {/* only for simulation */}
      <WateringSchedule plantsToWater={plantsToWater} />
    </div>
  );
}
