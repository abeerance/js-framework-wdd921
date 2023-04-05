import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

const ClickCounterCard: React.FC = () => {
  return (
    <Card display='flex' alignItems='center'>
      <CardHeader>
        <Heading size='2xl'>Click Counter</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize='2xl' as='b'>
          This is a simple react counter example
        </Text>
        <Box mt='20px' display='flex'>
          <Text fontSize='lg' as='b'>
            Current count
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default ClickCounterCard;
