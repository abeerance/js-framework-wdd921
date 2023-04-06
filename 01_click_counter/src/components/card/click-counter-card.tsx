import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import MinusButton from "../common/minus-button";
import PlusButton from "../common/plus-button";

const ClickCounterCard: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Card display='flex' alignItems='center'>
      <CardHeader>
        <Heading size='2xl'>Click Counter</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize='2xl' as='b'>
          This is a simple react counter example
        </Text>
        <Box mt='20px' display='flex' flexDirection='column'>
          <Text fontSize='lg' as='b'>
            Current count: {count}
          </Text>
          <Box mt='20px'>
            <PlusButton count={count} setCount={setCount} />
            <MinusButton count={count} setCount={setCount} />
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ClickCounterCard;
