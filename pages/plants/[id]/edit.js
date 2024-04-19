import { useRouter } from "next/router";
import Form from "@/components/Form";
import BackArrow from "@/components/MyPlant/BackArrow";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function EditPage({ handleEditPlant }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: session, status } = useSession();

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  if (!plant) return null;

  function handleSubmit(data) {
    console.log("data: ", data);
    handleEditPlant(data, id, mutate);
  }
  if (status !== "authenticated") {
    return <h1>Pech gehabt</h1>;
  }
  return (
    <>
      <BackArrow link={`/plants/${plant._id}`} />
      <Form
        onSubmit={handleSubmit}
        defaultData={plant}
        formName={"editPlant"}
        isEditMode={true}
      />
    </>
  );
}
