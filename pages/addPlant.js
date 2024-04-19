import Form from "@/components/Form";
import { useSession } from "next-auth/react";

import BackArrow from "@/components/MyPlant/BackArrow";

export default function AddPlant({ handleAddPlant }) {
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    return <h1>Pech gehabt</h1>;
  }
  return (
    <>
      <BackArrow link="/overview" />
      <Form onSubmit={handleAddPlant} isEditMode={false} />
      <br />
    </>
  );
}
