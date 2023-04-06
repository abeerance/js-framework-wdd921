import { IconButton } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

type PlusButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const PlusButton: React.FC<PlusButtonProps> = ({ count, setCount }) => {
  return (
    <IconButton
      aria-label='Plus Button'
      icon={<FiPlus />}
      onClick={() => setCount((count) => count + 1)}
    />
  );
};

export default PlusButton;
