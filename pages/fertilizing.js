import FertilizingSchedule from "@/components/FertilizingSchedule";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackArrow from "@/components/MyPlant/BackArrow";
import useSWR from "swr";

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

export default function ReminderPage() {
  const { data } = useSWR("/api/plants", { fallbackData: [] });
  const [plantsToFertilize, setPlantsToFertilize] = useState([]);

  const [month, nextMonth] = useMonthCount(0); // only for simulation

  const myPlants = data.filter((plant) => plant.isOwned);

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
      <BackArrow link="/" />
      <Image
        src="/img/iconFertilizing.png"
        width={80}
        height={80}
        alt="IconFertilizing"
      />
      <p>Current month : {monthName}</p>
      <button onClick={nextMonth}>Next month</button>{" "}
      <FertilizingSchedule plantsToFertilize={plantsToFertilize} />
    </div>
  );
}
