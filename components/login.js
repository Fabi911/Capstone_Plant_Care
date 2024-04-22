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
        <ButtonLogout onClick={() => signOut()}>🔒</ButtonLogout>
      </LoginContainer>
    );
  }
  return (
    <>
      Not signed in <br />
      <ButtonLogin onClick={() => signIn()}>🔓</ButtonLogin>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ButtonLogin = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
`;

const ButtonLogout = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
`;
