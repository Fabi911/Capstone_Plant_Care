export default function FormComments({ onSubmit, plant, mutate }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const notes = [...plant.notes, data.notes];

    onSubmit({ notes: notes }, plant._id, mutate);

    event.target.reset();
    event.target.notes.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="notes">Add a comment:</label>
      <input
        type="text"
        id="notes"
        name="notes"
        rows="2"
        cols="50"
        required
      ></input>
      <button type="submit">Post</button>
    </form>
  );
}
