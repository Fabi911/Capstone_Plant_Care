import Form from "@/components/Form";
import { useSession } from "next-auth/react";

import BackArrow from "@/components/MyPlant/BackArrow";

export default function AddPlant({ handleAddPlant }) {
  const { session } = useSession();
  //if (!session) {
  //return <h2>Pech gehabt</h2>;
  //}
  return (
    <>
      <BackArrow link="/overview" />
      <Form onSubmit={handleAddPlant} isEditMode={false} />
      <br />
    </>
  );
}
