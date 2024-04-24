import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <LoginContainer>
        {session.user.name}
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
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 1px #707070;
  }
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
