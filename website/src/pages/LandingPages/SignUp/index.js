/**
=========================================================
* Mohammadreza Sardashti - v2.1.0
=========================================================

* Product Page: /pages/landing-pages/contact-us
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

import Cookies from "js-cookie";
import axios from "axios";

// Mohammadreza Sardashti components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";

// Mohammadreza Sardashti example components
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

// Mohammadreza Sardashti page layout routes
import routes from "../../../routes";

// Images
import bgImage from "../../../assets/images/bg2.jpg";

import AuthWithGoogle from "../../../assets/theme/components/button/AuthWithGoogle";

//sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function SignUpBasic() {
  const [phoneNumberStatus, setPhoneNumberStatus] = useState(false);

  const handleChangePhoneNumber = () => {
    const iranianMobileRegex = /^09\d{9}$/;
    if(iranianMobileRegex.test(document.getElementById("mobile").value))
    {
      setPhoneNumberStatus(true);
    }else{
      setPhoneNumberStatus(false);
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if(code !== null)
    {
      const model = {
        credential: code,
        provider: "github"
      }
      axios.post("https://localhost:7239/api/v1/Account", model)
      .then((response) => response.data)
      .then((json) => {
        if (json.isSuccess == true) {
          Cookies.set("token", json.token, { expires: 7, path: "/" });
          window.location.href = "/presentation";
        }
        else {
          console.log(json.errors);
        }
        });
    }
  }, []);

  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const SignUpPostData = () => {
    const phoneNumber = document.getElementById("mobile").value;

    const iranianMobileRegex = /^09\d{9}$/;
    if(iranianMobileRegex.test(phoneNumber))
    {
      // Simple POST request with a JSON body using fetch
      axios.get("https://localhost:7239/api/v1/Account/SendCode/" +
        phoneNumber
      )
      .then((response) => {
        if(!response.data.isSuccess) {
          withReactContent(Swal).fire({
            icon: "warning",
            title: "warning",
            text: response.data.message[0]
          }); 
          return;  
        }
        window.location.href = "/pages/authentication/verification?mobile="
        + phoneNumber + "&rememberMe=" + rememberMe;
      });   
    }
    else{
      withReactContent(Swal).fire({
        icon: "warning",
        title: "warning",
        text: "Please enter a valid phone number"
      });
    }

  }

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/pages/landing-pages/contact-us",
          label: "Create WebSite",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign up
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <AuthWithGoogle />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="tel" label="Phone Number" id="mobile" fullWidth onChange={handleChangePhoneNumber} success={phoneNumberStatus} error={!phoneNumberStatus}  />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={SignUpPostData} variant="gradient" color="info" fullWidth>
                      send code
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/pages/authentication/sign-in"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignUpBasic;
