import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
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
        /* events={allMeals} */
        eventOrder={"category"}
        /* eventClick={handleEventClick} */
      />
    </>
  );
}
