import { AuthContext } from "@/context/auth-context";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import AestheteLogo from "./logo/aesthete-logo";
import NavLink from "./nav-link/nav-link";

const NavBar: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isToggled, setIsToggled] = useState(false);

  // function to toggle dropdown
  const handleAvatarClick = () => {
    setIsToggled(!isToggled);
  };

  // create the reference to the dropdown
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside the dropwdown
  const handleClickOutside = () => {
    setIsToggled(!isToggled);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  return (
    <header>
      <Box
        bg='white'
        borderBottom='1px solid'
        borderBottomColor='gray.200'
        py={3}
        position='relative'
        height='100px'
        width='100%'
        justifyContent='space-around'
        alignItems='center'
      >
        <nav style={{ height: "100%" }}>
          <Grid
            height='100%'
            width='100%'
            alignItems='center'
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          >
            <GridItem ml='40px'>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                }}
              >
                <NavLink title='New' href='/new-arrivals' marginRight={true} />
                <NavLink title='Shoes' href='/shoes' marginRight={true} />
                <NavLink title='Apparels' href='/apparels' marginRight={true} />
                <NavLink
                  title='Accessories'
                  href='/accessories'
                  marginRight={true}
                />
              </ul>
            </GridItem>
            <GridItem justifySelf='center'>
              <Link onClick={() => router.push("/")}>
                <AestheteLogo />
              </Link>
            </GridItem>
            <GridItem mr='40px' justifySelf='end'>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                }}
              >
                <NavLink title='About' href='/about' marginRight={false} />
                <NavLink title='Search' href='/search' marginRight={false} />
                <NavLink title='FAQ' href='/faq' marginRight={false} />
                <li>
                  <Icon
                    as={AiOutlineUser}
                    w={34}
                    h={31}
                    ml='12px'
                    cursor='pointer'
                    onClick={handleAvatarClick}
                  />
                  {isToggled && (
                    <VStack
                      ref={dropdownRef}
                      position='absolute'
                      padding='20px'
                      top='101%'
                      bg='#fff'
                      width='130px'
                      borderColor='gray.200'
                      borderBottomRadius='md'
                      boxShadow='md'
                      zIndex={1}
                    >
                      {isAuthenticated ? (
                        <Button
                          size='xs'
                          colorScheme='red'
                          width='100%'
                          onClick={() => {
                            logout();
                            setIsToggled(false);
                          }}
                        >
                          Logout
                        </Button>
                      ) : (
                        <Button
                          size='xs'
                          colorScheme='teal'
                          width='100%'
                          onClick={() => {
                            router.push("/session");
                            setIsToggled(false);
                          }}
                        >
                          Login
                        </Button>
                      )}
                    </VStack>
                  )}
                </li>
                <li>
                  <Icon
                    as={IoCartOutline}
                    w={34}
                    h={31}
                    ml='12px'
                    cursor='pointer'
                  />
                </li>
              </ul>
            </GridItem>
          </Grid>
        </nav>
      </Box>
    </header>
  );
};

export default NavBar;
