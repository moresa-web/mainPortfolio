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
import MKButton from "../../../components/MKButton";

// Mohammadreza Sardashti example components
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import SimpleFooter from "../../../examples/Footers/SimpleFooter";

// Mohammadreza Sardashti page layout routes
import routes from "../../../routes";

// Images
import bgImage from "../../../assets/images/bg-coworking.jpeg";

import AuthWithGoogle from "../../../assets/theme/components/button/AuthWithGoogle";
import VerificationInput from "react-verification-input";

//sweet Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function VerificationBasic() {

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

  const [twoFactory, setTwoFactory] = useState(false);
  const handleSetTwoFactory = () => setTwoFactory(!twoFactory);

  const urlParams = new URLSearchParams(window.location.search);
  const mobile = urlParams.get('mobile');

  const VerificationPostData = () => {
    // Simple POST request with a JSON body using fetch
    if(document.getElementsByClassName("vi")[0].value.length < 6)
    {
      withReactContent(Swal).fire({
        icon: "warning",
        title: "warning",
        text: "Please enter a valid code"
      });
      return;
    }
    const rememberMe = urlParams.get('rememberMe');
    axios.get("https://localhost:7239/api/v1/Account/Verification/" +
      mobile + "/" + document.getElementsByClassName("vi")[0].value + "/" + rememberMe + "/" + twoFactory
    )
    .then((response) => response.data)
    .then((json) => {
      if (json.isSuccess == true) {
        Cookies.set("token", json.token, { expires: 7, path: "/" });
        window.location.href = "/presentation";
      }
      else {
        withReactContent(Swal).fire({
          icon: "warning",
          title: "warning",
          text: json.message
        });
      }
    });
  }

  const Call = () => {
    axios.get("https://localhost:7239/api/v1/Account/SendCode/" +
      mobile + "/" + "call"
    )
    .then(() => {
      withReactContent(Swal).fire({
        icon: "success",
        title: "Calling...",
        text: "Please Wait"
      });
    });   
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
                Verification
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
                    <AuthWithGoogle />
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                  <VerificationInput
                    classNames={{
                      container: "container",
                      character: "character",
                      characterInactive: "character--inactive",
                      characterSelected: "character--selected",
                      characterFilled: "character--filled",
                    }}
                    onComplete={VerificationPostData}
                  />
                </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={twoFactory} onChange={handleSetTwoFactory} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetTwoFactory}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Two Factor Enabled
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={VerificationPostData} variant="gradient" color="info" fullWidth>
                    Verify
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Not sent?{" "}
                      <a href="#" onClick={Call} style={{color: "#1A73E8"}}>Call</a>
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

export default VerificationBasic;
