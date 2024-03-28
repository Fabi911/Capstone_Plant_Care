import Link from "next/link";
import Form from "@/components/Form";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 2px;
`;

export default function AddPlant({ handleAddPlant }) {
  function entrySucessful() {
    return alert("Plant added sucessfully");
  }

  return (
    <>
      <Form onSubmit={handleAddPlant} entrySucessful={entrySucessful} />
      <br />
      <StyledLink href="/">Back to Homepage</StyledLink>
    </>
  );
}
