import { useRouter } from "next/router";
import Link from "next/link";
import Form from "@/components/Form";
import BackArrow from "@/components/MyPlant/BackArrow";
import useSWR from "swr";

export default function EditPage({ handleEditPlant }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  if (!plant) return null;

  function handleSubmit(data) {
    console.log("data: ", data);
    handleEditPlant(data, id, mutate);
  }
  return (
    <>
      <BackArrow link={`/plants/${plant._id}`} />
      <Form
        onSubmit={handleSubmit}
        defaultData={plant}
        formName={"editPlant"}
      />
    </>
  );
}
