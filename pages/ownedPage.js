import Heart from "./heart.svg";

const LikedHeart = () => <Heart height={50} width={50} fill="red" />;

export default function MyPlant({ plants }) {
  return (
    <>
      <LikedHeart></LikedHeart>
    </>
  );
}
