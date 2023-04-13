import { IMAGE_URL } from "@/utils/constants";
import { Box, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  imageUrl: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageUrl,
  price,
}) => {
  const productImage = `${IMAGE_URL}${imageUrl}`;

  console.log(productImage);
  return (
    <GridItem
      height='400px'
      width='330px'
      borderRadius='10px'
      boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      overflow='hidden'
    >
      <Box width='100%' height='300px' position='relative'>
        <Image src={productImage} alt={title} fill />
      </Box>
      <Box margin='15px'>
        <Text fontSize='18px' fontWeight={600}>
          {title}
        </Text>
        <Text marginTop='5px'>{price}.- CHF</Text>
      </Box>
    </GridItem>
  );
};

export default ProductCard;
