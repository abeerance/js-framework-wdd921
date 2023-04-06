import { IconButton } from "@chakra-ui/react";
import { FiMinus } from "react-icons/fi";

type MinusButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const MinusButton: React.FC<MinusButtonProps> = ({ count, setCount }) => {
  return (
    <IconButton
      aria-label='Minus Button'
      ml='10px'
      icon={<FiMinus />}
      onClick={() => setCount((count) => count - 1)}
    />
  );
};

/// First example of a function child-component with props
// const exampleButton = ({ count, setCount }: MinusButtonProps) => {
//   return <></>;
// };

/// Second example of a function child-component with props
// function otherButton({ count, setCount }: MinusButtonProps) {
//   return <></>;
// }

export default MinusButton;
