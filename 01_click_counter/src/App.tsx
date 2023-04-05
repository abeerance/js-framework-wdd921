import { Box } from "@chakra-ui/react";
import "./App.css";
import ClickCounterCard from "./components/card/click-counter-card";

function App() {
  return (
    <Box
      height='100vh'
      width='100vw'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <ClickCounterCard />
    </Box>
  );
}

export default App;
