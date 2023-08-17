import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex w-full h-10 text-2xl list-none bg-gray-900">
      
      <Link href="/" className="mr-10">
        Home
      </Link>
      <Link href="/profile" className="mr-auto">
        Profile Page
      </Link>
     

      <div className="ml-auto space-x-4"> 
      
        {/* Sign in */}
        {!session ? (
          <Link href="/api/auth/signin" onClick={e => {
            e.preventDefault();
            signIn();
          }} className="text-gray-200 hover:text-gray-400">
            Sign In
          </Link>
        ) : (
          /* Sign Out */
          <Link href="/api/auth/signout" onClick={e => {
            e.preventDefault();
            signOut();
          }} className="text-green-500 hover:text-green-600">
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

