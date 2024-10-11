import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handleLogin = async (userData: any) => {
  return null
}

const authOptions: any = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials: any) {
        try {
          let { username: email, password } = credentials
          let user: any = await handleLogin({ email, password })
          if (user) {
            return user
          }
          return null
        } catch (error) {
          console.log("Error: ", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.username = user?.name
        token.email = user?.email
        token.id = user?._id
        token.image = user?.profileImage
        token.theme = user?.theme
      }
      return token
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.username = token.username
        session.user.email = token.email
        session.user.id = token.id
        session.user.image = token.image
        session.user.theme = token.theme
      }
      return session
    },
  },
}

const handler: any = NextAuth(authOptions)

export { handler as GET, handler as POST }
