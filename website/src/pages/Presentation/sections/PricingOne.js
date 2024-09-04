import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Kit 2 PRO React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

import PricingCart from "../../../examples/Cards/PricingCarts/PricingCart";

function PricingOne() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabType, setTabType] = useState("monthly");

  const features = [
    { name: "10 team members", disabled: false },
    { name: "40GB Cloud storage", disabled: false },
    { name: "Integration help", disabled: true },
    { name: "Sketch Files", disabled: false },
    { name: "API Access", disabled: true },
    { name: "Complete documentation", disabled: false }
  ];

  const handleTabType = ({ currentTarget }, newValue) => {
    setActiveTab(newValue);
    setTabType(currentTarget.id);
  };

  return (
    <MKBox component="section" variant="gradient" bgColor="dark" py={{ xs: 0, lg: 7 }}>
      <Container sx={{ pb: { xs: 12, lg: 22 }, pt: 12 }}>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          xs={12}
          md={8}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3" color="white" mb={2}>
            See our pricing
          </MKTypography>
          <MKTypography variant="body2" color="white">
            You have Free Unlimited Updates and Premium Support on each package.
          </MKTypography>
        </Grid>
      </Container>
      <MKBox mt={-16}>
        <Container>
          <Grid container sx={{ mb: 6 }}>
          </Grid>
          <MKBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={4}>
                <PricingCart button="PREMIUM" price="89" features={features} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <PricingCart button="PREMIUM" price="89" features={features}/>
              </Grid>
              <Grid item xs={12} lg={4}>
                <PricingCart button="PREMIUM" price="89" features={features}/>
              </Grid>
            </Grid>
          </MKBox>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default PricingOne;