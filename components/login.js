import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <LoginContainer>
        {session.user.name}
        <br />
        <Image
          alt={session.user.name}
          width={40}
          height={40}
          src={session.user.image}
        />
        <br />
        <Button onClick={() => signOut()}>
          <div>🔒</div>
        </Button>
      </LoginContainer>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>
        <div>🔓</div>
      </Button>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 1px 1px 1px rgb(200, 200, 200);
  cursor: pointer;
  &:active {
    box-shadow: inset 1px 1px 1px rgb(200, 200, 200);
  }
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;
