import Link from "next/link";
import Form from "@/components/Form";
import styled from "styled-components";
import BackArrow from "@/components/MyPlant/BackArrow";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 2px;
`;

export default function AddPlant({ handleAddPlant }) {
  return (
    <>
      <BackArrow />
      <Form onSubmit={handleAddPlant} />
      <br />
    </>
  );
}
