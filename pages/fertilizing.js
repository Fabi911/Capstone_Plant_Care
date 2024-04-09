import FertilizingSchedule from "@/components/FertilizingSchedule";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/public/img/iconFertilizing.png";

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
  const [plantsToFertilize, setPlantsToFertilize] = useState([]);

  const [month, nextMonth] = useMonthCount(0); // only for simulation

  const myPlants = plants.filter((plant) => plant.isOwned);

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
      <Image src={Icon} width={80} height={80} alt={name} />
      <p>Current month : {monthName}</p>
      <button onClick={nextMonth}>Next month</button>{" "}
      <FertilizingSchedule plantsToFertilize={plantsToFertilize} />
    </div>
  );
}
