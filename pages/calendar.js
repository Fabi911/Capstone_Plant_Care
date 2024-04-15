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
  /* new Date().toISOString() */
};

export default function Calendar() {
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
        events={[mockData]}
        eventOrder={"category"}
        eventContent={renderEventContent}
        /* eventClick={handleEventClick} */
      />
    </>
  );
}
