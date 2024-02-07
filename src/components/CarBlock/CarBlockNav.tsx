import { useRouter } from "next/router";
import { Block, Flex, Link } from "vcc-ui";
//import Links from "next/link";

interface CarBlockNavProps {
  carslug: string
}


const CarBlockNav: React.FC<CarBlockNavProps> = ({ carslug }) => {
  const router = useRouter();

  const learnHandleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    router.push(`/learn/${carslug}`);
  };

  const shopHandleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    router.push(`/shop/${carslug}`);
  };

  return (
    <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
      <Block extend={{ padding: 20 }}>
        <Link
          aria-label={`learn ${carslug}`}
          href={`/learn/${carslug}`}
          onClick={learnHandleClick}
          arrow="right"
        >
          LEARN
        </Link>
      </Block>

      <Block extend={{ padding: 20 }}>
        <Link
          aria-label={`shop ${carslug}`}
          href={`/shop/${carslug}`}
          onClick={shopHandleClick}
          arrow="right"
        >
          SHOP
        </Link>
      </Block>
    </Flex>
  );
};

export default CarBlockNav;
