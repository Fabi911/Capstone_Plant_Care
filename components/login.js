import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();
  // const { accessToken } = data;
  if (session) {
    return (
      <>
        {session.user.name}
        <Image
          alt={session.user.name}
          width={40}
          height={40}
          src={session.user.image}
        />
        <br />
        <button onClick={() => signOut()}>Logout</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Login</button>
      {/* <div>Access Token: {accessToken}</div> */}
    </>
  );
}
