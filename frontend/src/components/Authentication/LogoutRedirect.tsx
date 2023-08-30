import { useAuth0 } from "@auth0/auth0-react";

const LogoutRedirect = () => {
  const { logout } = useAuth0();

  logout({ 
      logoutParams: { 
        returnTo: window.location.origin,
      } 
    });

  return <></>
};

export default LogoutRedirect;
