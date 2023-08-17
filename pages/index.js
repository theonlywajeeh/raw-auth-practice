import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <>
    <h1 className='text-green-400 text-5xl text-center'>Home Page</h1>
    </>
  )
}


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}