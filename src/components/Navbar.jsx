import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { HiBars2, HiFire, HiStar } from "react-icons/hi2";

const navLinks = [
  {
    label: "Solutions",
    link: "/solutions",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Support",
    link: "/support",
  },
  {
    label: "Resources",
    link: "/resources",
  },
];

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-base-100">
      <div className="container navbar mx-auto">
        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="btn-primary btn-ghost btn gap-1 text-xl normal-case no-underline"
          >
            Planorama
          </Link>
        </div>

        <div className="hidden flex-none space-x-2 md:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">
            {/* <li>
              <a>Resources</a>
            </li>

            <li>
              <a>Solutions</a>
            </li> */}

            <li>
              <Link href="/about">About</Link>
            </li>

            {session?.user ? (
              <>
                <li>
                  <Link className="justify-between" href="/events">
                    Events
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a onClick={signIn}>Sign In</a>
                </li>
              </>
            )}
          </ul>

          {session?.user && (
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <Image
                    src={session.user.image}
                    width={100}
                    height={100}
                    alt="profile"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href="/calendar">Calendar</Link>
                </li>
                <li>
                  <a onClick={signOut}>Log out</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        <div className="dropdown-end dropdown md:hidden">
          <label tabIndex={0} className="btn-ghost btn-square btn m-1">
            <HiBars2 className="text-3xl" />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/about">About</Link>
            </li>

            {session?.user ? (
              <>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/calendar">Calendar</Link>
                </li>
                <li>
                  <a onClick={signOut}>Log out</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a onClick={signIn}>Sign in</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
