import Form from "@/components/Form";

import BackArrow from "@/components/MyPlant/BackArrow";

export default function AddPlant({ handleAddPlant }) {
  return (
    <>
      <BackArrow link="/overview" />
      <Form onSubmit={handleAddPlant} isEditMode={false} />
      <br />
    </>
  );
}
