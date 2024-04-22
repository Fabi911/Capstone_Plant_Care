import WateringSchedule from "@/components/WateringSchedule";
import { useEffect, useState } from "react";
import Image from "next/image";
import BackArrow from "@/components/MyPlant/BackArrow";
import useSWR from "swr";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function useDayCount(startDay) {
  const [day, setDay] = useState(startDay);
  function handleNextDay() {
    setDay((currentDay) => currentDay + 1);
  }
  return [day, handleNextDay];
}

export default function Watering() {
  const { data } = useSWR("/api/plants", { fallbackData: [] });
  const [plantsToWater, setPlantsToWater] = useState([]);

  const [day, nextDay] = useDayCount(0); // only for simulation

  const myPlants = data.filter((plant) => plant.isOwned);
  const dayOfWeek = daysOfWeek[day % 7];
  useEffect(() => {
    const plantsToday = myPlants.filter((plant) => {
      if (plant.water_need === "High") {
        return true;
      } else if (plant.water_need === "Moderate") {
        return day % 2 === 0;
      } else if (plant.water_need === "Low") {
        return day % 7 === 0;
      }
      return false;
    });

    setPlantsToWater(plantsToday);
  }, [day]);

  return (
    <div>
      <BackArrow link="/" />
      <Image src="/img/iconWater.png" width={80} height={80} alt="iconWater" />
      <p>Day of the week : {dayOfWeek}</p>

      <button onClick={nextDay}>Next day</button>
      <WateringSchedule plantsToWater={plantsToWater} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        headbarToolbar={{ left: "today", center: "title", right: "newMeal" }}
        footerToolbar={{
          left: "dayGridWeek,dayGridDay",
          right: "prev,next",
        }}
        customButtons={{
          newMeal: {
            text: "New",
            click: function () {
              setModalContent("form");
              setShowModal();
            },
          },
        }}
        editable={true}
        /* events={allMeals} */
        eventOrder={"category"}
        /* eventClick={handleEventClick} */
      />
    </div>
  );
}
