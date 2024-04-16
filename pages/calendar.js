import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const mockData = {
  _id: { $oid: "66168f95531a604507133c64" },
  name: "Snake Plant",
  botanical_name: "Sansevieria trifasciata",
  water_need: "Low",
  fertiliser_season: ["Spring", "Summer"],
  isOwned: false,
  gallery: [],
  image:
    "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25ha2UlMjBQbGFudHxlbnwwfHwwfHx8MA%3D%3D",
  notes: ["Gute alte Snake", "läuft", "läuft immernoch"],
  start: new Date("2024-04-15"),
};

// Function to generate watering tasks for a given date range
const generateWateringTasks = (startDate) => {
  const tasks = [];
  const start = new Date(mockData.start);
  const oneYearLater = new Date(startDate);
  oneYearLater.setFullYear(oneYearLater.getFullYear() + 1); // Set one year into the future

  // Calculate watering tasks until one year into the future
  for (
    let date = new Date(startDate);
    date <= oneYearLater;
    date.setDate(date.getDate() + 1)
  ) {
    const diffDays = Math.round((date - start) / (1000 * 60 * 60 * 24)); // Calculate the difference in days

    if (diffDays % 3 === 0) {
      const event = {
        title: "Watering",
        start: new Date(date),
        botanical_name: mockData.botanical_name, // Add botanical name to the event
        water_need: mockData.water_need, // Add water need to the event
      };
      tasks.push(event);
      console.log("Generated Event:", event); // Log the generated event
    }
  }

  return tasks;
};

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Get the start and end dates of the current week
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Start of the current week (Sunday)
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // End of the current week (Saturday)

    console.log("Start Date:", startDate); // Log the start date
    console.log("End Date:", endDate); // Log the end date
    console.log("Mock Data Start Date:", mockData.start); // Log the start date from mock data

    // Generate watering tasks for the current week
    const wateringTasks = generateWateringTasks(startDate, endDate);

    console.log("Watering Tasks:", wateringTasks); // Log the generated watering tasks
    setEvents(wateringTasks);
  }, []);

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.event.title}</b> {/* Display event title */}
        <p>{eventInfo.event.extendedProps.botanical_name}</p>{" "}
        {/* Display botanical name */}
        <p>Water Need: {eventInfo.event.extendedProps.water_need}</p>{" "}
        {/* Display water need */}
      </div>
    );
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        headerToolbar={{ left: "today", center: "title", right: "newMeal" }}
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
        events={events}
        eventOrder={"category"}
        eventContent={renderEventContent}
        /* eventClick={handleEventClick} */
      />
    </>
  );
}
