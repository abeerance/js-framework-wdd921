import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

type NavLinkProps = {
  title: string;
  href: string;
  marginRight: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ title, href, marginRight }) => {
  const router = useRouter();

  return (
    <li>
      <Link
        minH='42px'
        minW='42px'
        fontSize='14px'
        display='flex'
        alignItems='center'
        textTransform='uppercase'
        fontWeight={600}
        margin={`${marginRight === true ? "0 18px 0 0" : "0 0 0 18px"}`}
        onClick={() => router.push(href)}
        color='black'
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
