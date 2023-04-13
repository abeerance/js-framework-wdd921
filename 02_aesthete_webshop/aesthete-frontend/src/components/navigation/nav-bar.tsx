import { Box, Grid, GridItem, Icon, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import AestheteLogo from "./logo/aesthete-logo";
import NavLink from "./nav-link/nav-link";

const NavBar: React.FC = () => {
  const router = useRouter();
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
                  />
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
