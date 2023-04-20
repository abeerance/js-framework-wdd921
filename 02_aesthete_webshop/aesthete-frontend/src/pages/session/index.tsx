import { AuthContext } from "@/context/auth-context";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

enum AuthMode {
  LOGIN = "login",
  REGISTER = "register",
  FORGOT_PASSWORD = "forgotPassword",
}

// email regex
const isValidEmail = (email: string) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};

const Session: React.FC = () => {
  const { login, signup } = useContext(AuthContext);
  const [mode, setMode] = useState<AuthMode>(AuthMode.LOGIN);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  // on submit form function
  const onSubmit = async (data: any) => {
    try {
      // if mode is AuthMode.LOGIN
      if (mode === AuthMode.LOGIN) {
        // login the user with the help of AuthContext
        const loggedIn = await login(data.email, data.password);
        // if the login was succesful
        if (loggedIn) {
          // redirect to the homepage
          router.push("/");
        }
      } else if (mode === AuthMode.REGISTER) {
        // register the user with the help of AuthContext
        const registered = await signup(data.email, data.password);
        // if the registration was succesful
        if (registered) {
          // login the user
          const loggedIn = await login(data.email, data.password);
          // if the login was succesful
          if (loggedIn) {
            // redirect to the homepage
            router.push("/");
          }
        }
      }
    } catch (error) {
      console.error("Error while logging in", error);
    }
  };

  // set mode function
  const switchMode = (newMode: AuthMode) => {
    // reset the form
    reset({
      email: "",
      password: "",
      repeatPassword: "",
    });
    setMode(newMode);
  };

  // watch password field
  const password = watch("password");

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='calc(100vh - 350px)'
      width='100%'
    >
      {/* form */}
      <FormControl width='50%' maxWidth='450px'>
        <Text fontSize='20px' fontWeight={600} color='teal'>
          {/* ternary operator for title */}
          {mode === AuthMode.LOGIN
            ? "Login"
            : mode === AuthMode.REGISTER
            ? "Register"
            : "Reset Password"}
        </Text>
        {/* email  */}
        <FormLabel marginTop='20px' htmlFor='email' fontSize='14px'>
          Email
        </FormLabel>
        <Input
          type='email'
          id='email'
          {...register("email", {
            required: "Email is required",
            validate: {
              validEmail: (value) => isValidEmail(value) || "Invalid email",
            },
          })}
        />
        {errors.email && (
          <Text fontSize='12px' color='red' marginTop='5px'>
            {errors.email.message as React.ReactNode}
          </Text>
        )}
        {/* ternary operator for forgot password, if forgot password don't show */}
        {mode === AuthMode.FORGOT_PASSWORD ? null : (
          <>
            <Box marginTop='20px' display='flex' justifyContent='space-between'>
              <FormLabel htmlFor='password' fontSize='14px'>
                Password
              </FormLabel>
              {/* ternary operator for forgot password button, only show when mode = login */}
              {mode === AuthMode.LOGIN ? (
                <Button
                  size='xs'
                  variant='link'
                  position='relative'
                  top='-5px'
                  onClick={() => switchMode(AuthMode.FORGOT_PASSWORD)}
                >
                  Forgot Password
                </Button>
              ) : null}
            </Box>
            <Input
              type='password'
              id='password'
              {...register("password", {
                required:
                  mode === AuthMode.LOGIN || mode === AuthMode.REGISTER
                    ? "Password is required"
                    : false,
              })}
            />
            {errors.password && (
              <Text fontSize='12px' color='red' marginTop='5px'>
                {errors.password.message as React.ReactNode}
              </Text>
            )}
            {/* ternary operator for repeat password, only show when mode = REGISTER */}
            {mode === AuthMode.REGISTER ? (
              <>
                <FormLabel
                  htmlFor='repeat-password'
                  fontSize='14px'
                  marginTop='20px'
                >
                  Repeat Password
                </FormLabel>
                <Input
                  type='password'
                  id='repeatPassword'
                  {...register("repeatPassword", {
                    required:
                      mode === AuthMode.REGISTER
                        ? "Repeat password is required"
                        : undefined,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.repeatPassword && (
                  <Text fontSize='12px' color='red' marginTop='5px'>
                    {errors.repeatPassword.message as React.ReactNode}
                  </Text>
                )}
              </>
            ) : null}
          </>
        )}
        {/* The button section */}
        <Box
          marginTop='25px'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Button
            type='submit'
            width='100%'
            size='sm'
            colorScheme='teal'
            onClick={handleSubmit(onSubmit)}
          >
            {/* ternary operator for string depending on AuthMode */}
            {mode === AuthMode.LOGIN
              ? "Login"
              : mode === AuthMode.REGISTER
              ? "Register"
              : "Reset Password"}
          </Button>
          <Box display='flex' alignItems='center' marginTop='10px'>
            <Text fontSize='12px'>
              {/* ternary operator for string depending on AuthMode */}
              {mode === AuthMode.LOGIN
                ? "Not a member?"
                : mode === AuthMode.REGISTER
                ? "Already a member?"
                : null}
            </Text>
            <Button
              variant='link'
              size='xs'
              colorScheme='teal'
              marginLeft='4px'
              onClick={() =>
                switchMode(
                  mode === AuthMode.LOGIN ? AuthMode.REGISTER : AuthMode.LOGIN
                )
              }
            >
              {/* ternary operator for string depending on AuthMode */}
              {mode === AuthMode.LOGIN
                ? "Sign up now"
                : mode === AuthMode.REGISTER
                ? "Sign in now"
                : "Back to Login"}
            </Button>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Session;
