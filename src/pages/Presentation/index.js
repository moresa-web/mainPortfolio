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
import { useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { TypeAnimation } from 'react-type-animation';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Mohammadreza Sardashti components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKSocialButton from "../../components/MKSocialButton";

// Mohammadreza Sardashti examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import FilledInfoCard from "../../examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "./sections/Counters";
import Information from "./sections/Information";
// import DesignBlocks from "./sections/DesignBlocks";
// import Pages from "./sections/Pages";
import Testimonials from "./sections/Testimonials";
import Download from "./sections/Download";
import PricingOne from "./sections/PricingOne";
import Product from "./sections/Products/Product";
import PricePrediction from "./sections/PricePrediction";

// Presentation page components
import BuiltByDevelopers from "../../pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

import EditPresentationDatas from "./sections/PresentationDatas/EditPresentationDatas";
import GetPresentationDatasClass from "./sections/PresentationDatas/GetPresentationDatas";

import Places from "../LandingPages/Author/sections/Posts";

import Parser from "html-react-parser";

// Images
// import bgImage from "../../assets/images/bg-presentation.jpg";
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";

function Presentation() {
  const [viewDatas, setViewDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  AOS.init();
  const share = (title, text, url) => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Sharing is not supported in this browser');
    }
  };

  const editCallback = async (json, location) => {
    const newData = [...viewDatas]; // create a copy of the original array
    const foundModel = newData.find((model) => model.location === location);
    if (foundModel) {
      foundModel.data[0] = json;
    }
    setViewDatas(newData);
  };
  const callback = async (datas) => {
    console.log(datas);
    if(datas.length > 0) {
      setViewDatas(datas);
      setLoading(false);  
    }
  }

  if(loading == true)
  {
    const presentationData = new GetPresentationDatasClass();
    presentationData.GetPresentationDatas(callback);
  }
  
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      // The click event originated from the div element itself
      EditPresentationDatas("backgroundImage", "index", editCallback)
    } else {
      // The click event originated from a child element
      return;
    }
  };

  if(loading == false)
  {
    bgImage = viewDatas?.find((model) => model.location === "backgroundImage")?.data[0]??"/static/media/bg-sign-in-basic.f327db1d0e4b00ba3c81.jpeg";
  }

  return (
    <>
    <div data-aos="fade-right">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/pages/landing-pages/contact-us",
          label: "Create WebSite",
          color: "info",
        }}
        sticky
        />
      </div>
      <MKBox
        minHeight="75vh"
        width="100%"
        onDoubleClick={handleClick}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div data-aos="zoom-out">

        <Container>
          <Grid container item xs={12} lg={9} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              onDoubleClick={() => EditPresentationDatas("skillsTitle", "index", editCallback)}
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              >
              {loading ? (
                <>i know{" "}</>
              ) : (
                <>{Parser(viewDatas?.find((model) => model.location === "skillsTitle")?.data[0])??"i know"+' '}{" "}</>
              )}

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'React',
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  'DotNet',
                  2000,
                  'C#',
                  2000,
                  'Back-End',
                  2000,
                  'Front-End',
                  2000,
                  'Full-Stack',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />

            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              onDoubleClick={() =>  EditPresentationDatas("skillsDescription", "index", editCallback)}
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              >
              {loading ? (
                <>
                  The coded website design at the most affordable price
                  can be seen all over the world with just one click
                </>
              ) : (
                <>{viewDatas?.find((model) => model.location === "skillsDescription")?.data[0]??
                  `
                    The coded website design at the most affordable price
                    can be seen all over the world with just one click
                  `
                  }{" "}</>
              )}
            </MKTypography>
          </Grid>
        </Container>
      </div>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div data-aos="flip-left">
          <Counters />
        </div>
        <div data-aos="fade-up-right">
          <Information />
         </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Product/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <PricePrediction/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Places/>
        </div>
        {/* <Pages /> */}
        <div data-aos="flip-up">
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        </div>
        <div data-aos="zoom-in-down">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">        
     <Testimonials />
</div>
    <PricingOne />
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Download />
</div>
            <div data-aos="fade-right">
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>

              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank You To See My WebSite!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
                >
                <MKSocialButton
                  component="a"
                  href="https://instagram.com/moresa_programmer"
                  target="_blank"
                  sx={{ mr: 1 }}
                  >
                  <i className="fab fa-instagram" />
                  &nbsp;instagram
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://github.com/moresaunity"
                  target="_blank"
                  sx={{ mr: 1 }}
                  >
                  <i className="fab fa-facebook" />
                  &nbsp;github
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  onClick={() => share('Mohammadreza Sardashti', 'Check out my website!', 'https://MohammadrezaSardashti.ir')}
                  href=""
                  target="_blank"
                  >
                  <i className="fab fa-share" />
                  &nbsp;Share
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
          </div>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
