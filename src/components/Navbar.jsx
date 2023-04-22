import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

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
    // <Box px={4} py={6} textColor="black" bg="white">
    //   <Container maxW="container.xl">
    //     <Flex align="center" gap={8}>
    //       <Button
    //         leftIcon={<HiSparkles size={24} />}
    //         variant="link"
    //         textColor="inherit"
    //         as={Link}
    //         href="/"
    //         fontSize="lg"
    //         _hover={{
    //           textDecoration: "none",
    //           color: "linkedin.500",
    //         }}
    //       >
    //         Planorama
    //       </Button>

    //       <HStack gap={6}>
    //         {navLinks.map((navLink) => (
    //           <Button
    //             key={navLink.link}
    //             href={navLink.link}
    //             as={Link}
    //             variant="link"
    //             textColor="inherit"
    //             _hover={{
    //               textDecoration: "none",
    //               color: "linkedin.500",
    //             }}
    //           >
    //             {navLink.label}
    //           </Button>
    //         ))}
    //       </HStack>

    //       <Spacer />

    //       {session ? (
    //         <>
    //           <Button
    //             variant="link"
    //             textColor="inherit"
    //             _hover={{
    //               textDecoration: "none",
    //               color: "linkedin.500",
    //             }}
    //             as={Link}
    //             href="/events"
    //           >
    //             Events
    //           </Button>

    //           <Button
    //             textColor="inherit"
    //             href="/profile"
    //             variant="link"
    //             as={Link}
    //             gap={4}
    //             _hover={{
    //               textDecoration: "none",
    //               color: "linkedin.500",
    //             }}
    //           >
    //             <Text>Profile</Text>
    //           </Button>
    //           <Button
    //             variant="link"
    //             textColor="inherit"
    //             _hover={{
    //               textDecoration: "none",
    //               color: "linkedin.500",
    //             }}
    //             onClick={signOut}
    //           >
    //             Sign out
    //           </Button>
    //         </>
    //       ) : (
    //         <Button
    //           _hover={{
    //             textDecoration: "none",
    //             color: "linkedin.500",
    //           }}
    //           variant="link"
    //           onClick={signIn}
    //           textColor="inherit"
    //           leftIcon={<HiUser size={24} />}
    //         >
    //           Log in
    //         </Button>
    //       )}
    //     </Flex>
    //   </Container>
    // </Box>

    <div className="bg-base-100">
      <div className="container navbar mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            Planorama
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a>Resources</a>
            </li>

            <li>
              <a>Solutions</a>
            </li> */}

            <li>
              <a>About</a>
            </li>

            {!session?.user && (
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
                  <Link className="justify-between" href="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <a onClick={signOut}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
