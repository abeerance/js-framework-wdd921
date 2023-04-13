import ProductCard from "@/components/products/product-card";
import { Product } from "@/types/types";
import { API_TOKEN, API_URL } from "@/utils/constants";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";

// define props for Shoes component
interface ShoesProps {
  products: Product[];
}

// shoes react component with props
const Shoes: React.FC<ShoesProps> = ({ products }) => {
  return (
    <Grid
      width='100%'
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap='30px'
      flexFlow='row wrap'
      justifyItems='center'
    >
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.attributes.title}
            imageUrl={product.attributes.image.data.attributes.url}
            price={product.attributes.price}
          />
        );
      })}
    </Grid>
  );
};

// get serverSiderProps function runs before the component is completely rendered
// as long as getServerSideProps is still running, the component has the state "loading"
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // fetch data from the api, only fetch products that are shoes
    const { data } = await axios.get(
      `${API_URL}products?filters[categories][title][$contains]=shoes&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );

    // return the data as props
    return {
      props: {
        products: data.data,
      },
    };
  } catch (error: any) {
    // if nothing is found or there is an error
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default Shoes;
