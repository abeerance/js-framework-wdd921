import { AuthContext } from "@/context/auth-context";
import { useContext, useState } from "react";

enum AuthMode {
  LOGIN = "login",
  REGISTER = "register",
  FORGOT_PASSWORD = "forgotPassword",
}

const Session: React.FC = () => {
  const { login, signup } = useContext(AuthContext);
  const [mode, setMode] = useState<AuthMode>(AuthMode.LOGIN);

  // set mode function
  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
  };

  return <h1>This is the session page</h1>;
};

export default Session;
