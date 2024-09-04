import{GoogleOAuthProvider,useGoogleLogin} from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";
import MKTypography from "../../../../components/MKTypography";
import MuiLink from "@mui/material/Link";
import Cookies from "js-cookie";

const AuthWithGoogle = () => {
  //a button componet
  const GoogleLoginButton = () => {
    const handleGoogleAuth = useGoogleLogin({
      onSuccess: (credentialResponse) => {
        var model = {
          credential: credentialResponse.credential
        };
      
        fetch("https://localhost:7239/api/v1/Account", {
          method: "POST",
          body: JSON.stringify(model),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.isSuccess == true) {
              Cookies.set("token", json.token, { expires: 7, path: "/" });
              window.location.href = "/presentation";
            }
            else {
              console.log(json.errors);
            }
          });
        },
      onError: () => console.log("Login Failed"),
      flow: "auth-code",
    });

    return (
    <MKTypography component={MuiLink} href="" onClick={() => handleGoogleAuth()} variant="body1" color="white">
        <GoogleIcon color="inherit" />
      </MKTypography>
      );
  };

  return (
    <GoogleOAuthProvider clientId="462940104381-a81hsl5sj0go33af4p0m7s0nnorkfkrv.apps.googleusercontent.com">
      <GoogleLoginButton />
    </GoogleOAuthProvider>
  );
};


export default AuthWithGoogle;