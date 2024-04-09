import { useRouter } from "next/router";
import Link from "next/link";
import Form from "@/components/Form";
import BackArrow from "@/components/MyPlant/BackArrow";

export default function EditPage({ plants, handleEditPlant }) {
  const router = useRouter();
  const { id } = router.query;

  const editPlant = plants.find((plant) => plant.id === id);

  if (!editPlant) return null;

  function handleSubmit(data) {
    const editedPlant = { ...editPlant, ...data };
    handleEditPlant(editedPlant);
    router.push("/");
  }

  return (
    <>
      <BackArrow />
      <Form
        onSubmit={handleSubmit}
        defaultData={editPlant}
        formName={"editPlant"}
      />
      ;<Link href="/">Back to Homepage</Link>
    </>
  );
}
