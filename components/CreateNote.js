import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateNote({ plantId }) {
  const router = useRouter();
  const [noteText, setNoteText] = useState("");

  async function handleAddNote() {
    const response = await fetch(`/api/plants/${plantId}`, {
      method: "POST",
      body: JSON.stringify({ note: noteText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      router.push(`/plants/${plantId}`);
    } else {
      console.error("Failed to add note");
    }
  }

  return (
    <>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAddNote}>Create Note</button>
    </>
  );
}
