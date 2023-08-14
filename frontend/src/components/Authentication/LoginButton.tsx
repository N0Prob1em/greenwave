import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect(
    {
      authorizationParams: {
        redirect_uri: window.location.origin + window.location.pathname
      }
    }
  )}>Log In</button>;
};

export default LoginButton;
