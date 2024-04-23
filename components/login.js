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
        <ProfileImage
          alt={session.user.name}
          width={40}
          height={40}
          src={session.user.image}
        />
        <br />
        <LoginButton onClick={() => signOut()}>
          <div>🔑</div>
        </LoginButton>
      </LoginContainer>
    );
  }
  return (
    <>
      Not signed in <br />
      <LoginButton onClick={() => signIn()}>
        <div>🔑</div>
      </LoginButton>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  &:active {
    box-shadow: inset 1px 1px 1px rgb(200, 200, 200);
  }
  font-size: 0%, 5;
  width: 3rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const ProfileImage = styled(Image)`
  border-radius: 30px;
`;

const LoginButton = styled.button`
  margin: 5px;
  border-radius: 30px;
`;
