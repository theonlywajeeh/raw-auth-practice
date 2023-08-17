import { getSession } from "next-auth/react"


export default function Home() {
  const { data: session, status, loading } = getSession();
  console.log( session, status, )
    return (
      <>
      <h1 className='text-purple-500 text-5xl text-center'>Profile Page</h1>
      </>
    )
  }
  