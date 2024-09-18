/*
=========================================================
* Mohammadreza Sardashti - v2.1.0
=========================================================

* Product Page: /pages/landing-pages/contact-us
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Mohammadreza Sardashti components
import MKBox from "../../../components/MKBox";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

import Switch from "@mui/material/Switch";

import axios from "axios";

//sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Images
import bgImage from "../../../assets/images/examples/blog2.jpg";

function PricePrediction() {
  const [checked, setChecked] = useState(false);
  const toggleSwitch = () => setChecked(!checked);
  
  const PostData = () => {
    const model = {
      DomainType: document.getElementById("DomainType").value,
      ProgrammingLanguege: document.getElementById("ProgrammingLanguege").value,
      WebSiteType: document.getElementById("WebSiteType").value,
      IsFastCreated: checked,
      MonthlySales: document.getElementById("MonthlySales").value
    }
    axios.post("https://localhost:7239/api/v1/ml/PricePrediction/Prediction", model)
    .then((response) => response.data)
    .then((json) => {
      if (json.isSuccess === true) {
        withReactContent(Swal).fire({
          icon: "success",
          title: "request send",
          text: "price: "+ json.data
        });  
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
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Fill up the form and our Team will get back to you within 24 hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+40) 772 100 200
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Price Prediction
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      your can price prediction
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Domain Type"
                          placeholder="com, org, net ..."
                          InputLabelProps={{ shrink: true }}
                          id="DomainType"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Programming Languege"
                          placeholder="c#, python, java ..."
                          InputLabelProps={{ shrink: true }}
                          id="ProgrammingLanguege"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="WebSite Type"
                          placeholder="food, cv, shop ..."
                          InputLabelProps={{ shrink: true }}
                          id="WebSiteType"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Monthly Sales"
                          placeholder="your Monthly Sales"
                          InputLabelProps={{ shrink: true }}
                          id="MonthlySales"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                      <Switch checked={checked} onChange={toggleSwitch} />
            <MKBox ml={2} lineHeight={0.5}>
              <MKTypography display="block" variant="button" fontWeight="bold">
                Remember me
              </MKTypography>
              <MKTypography variant="caption" color="text" fontWeight="regular">
                Be sure that you will always be logged in.
              </MKTypography>
            </MKBox>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton onClick={PostData} variant="gradient" color="info">
                        Price Prediction
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PricePrediction;
