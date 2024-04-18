import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
//import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "stranger_boy" &&
          credentials.password === "stranger_plant"
        ) {
          return {
            name: "Stranger Boy",
            email: "stranger@Plants.com",
          };
        } else {
          return null;
        }
      },
    }),
    // DiscordProvider({
    //   clientId: process.env.DISCORD_CLIENT_ID,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET,
    // }),
  ],
};

export default NextAuth(authOptions);
