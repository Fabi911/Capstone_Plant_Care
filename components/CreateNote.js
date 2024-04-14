export default function CreateNote() {
  async function handleAddNote(plant) {
    const response = await fetch("/api/plants", {
      method: "POST",
      body: JSON.stringify(plant),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.push("/ownedPage");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <button>create note</button>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required maxLength={150} />
      <form></form>
    </>
  );
}
