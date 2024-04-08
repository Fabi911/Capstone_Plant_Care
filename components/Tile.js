import { useRouter } from "next/router";

export default function Tile({ title, href }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };
  return (
    <button type="button" onClick={handleClick}>
      <h1>This is a placeholder!{title}</h1>
    </button>
  );
}
