import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react"

const Home: NextPage = () => {

  const { data: session, status } = useSession()
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  if(status === 'loading'){
    return (
        <>
            Loading...
        </>
    ) 
  }

  if (session) {
    return (
        <>
            You have logged in <button onClick={() => signOut()}>Sign out</button>
        </>
    )
  }
  return (
    <>
        Not Logged In <button onClick={() => signIn('okta')}>Sign in</button>
    </>
  )
};

export default Home;
