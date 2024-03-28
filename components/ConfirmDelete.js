export default function ConfirmDelete({ handleConfirm, handleCancel }) {
  return (
    <>
      <div>
        <p>Sure you want to delete this plant?</p>
        <button type="button" onClick={handleConfirm}>
          Yes
        </button>
        <button type="button" onClick={handleCancel}>
          No
        </button>
      </div>
    </>
  );
}
