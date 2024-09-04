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

import React from 'react';

// @mui material components
import Grid from "@mui/material/Grid";

// Mohammadreza Sardashti components
import MKBox from "../../../components/MKBox";
import MKInput from "../../../components/MKInput";
import MKButton from "../../../components/MKButton";
import MKTypography from "../../../components/MKTypography";

// Mohammadreza Sardashti examples
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";

// Routes
import routes from "../../../routes";
import footerRoutes from "../../../footer.routes";

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Cookies from "js-cookie";

// Image
import bgImage from "../../../assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  const navigate = useNavigate();

  const PostData = (e) => {
    e.preventDefault();
    const model = {
      text: document.getElementById("text").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      token: Cookies.get('token')
    }
    model.text = model.text.replace(/<script.*?>.*?<\/script>/gi, '<i style="color: red">!</i>');
    axios.post("https://localhost:7239/api/v1/Contact", model)
    .then((response) => response.data)
    .then((json) => {
      if(json){
        if(json.isSuccess)
        {
          navigate('/presentation', { replace: true });
        }
      }
    });      
  }
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "/pages/landing-pages/contact-us",
            label: "Create WebSite",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, including partnership opportunities, please email
                hello@creative-tim.com or contact using our contact form.
              </MKTypography>
              <MKBox width="100%" onSubmit={PostData} component="form" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      id="name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      id="email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      id="text"
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
