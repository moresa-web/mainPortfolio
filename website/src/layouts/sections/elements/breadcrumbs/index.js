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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Mohammadreza Sardashti components
import MKBox from "../../../../components/MKBox";

// Mohammadreza Sardashti examples
import Breadcrumbs from "../breadcrumbs";

// Sections components
import BaseLayout from "../../../../layouts/sections/components/BaseLayout";
import View from "../../../../layouts/sections/components/View";

// Breadcrumbs page components code
import breadcrumbsCode from "../../../../layouts/sections/elements/breadcrumbs/code";

function BreadcrumbsEl() {
  return (
    <BaseLayout
      title="Breadcrumbs"
      breadcrumb={[
        { label: "Page Sections", route: "./breadcrumbs" },
        { label: "Breadcrumbs" },
      ]}
    >
      <View title="Breadcrumbs" code={breadcrumbsCode}>
        <MKBox component="section" bgColor="white" py={8}>
          <Container>
            <Grid container spacing={2} item xs={12} lg={10} mx="auto">
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[{ label: "Home", route: "./breadcrumbs" }]}
                />
              </Grid>
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: "Home", route: "./breadcrumbs" },
                    { label: "Library" },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: "Home", route: "./breadcrumbs" },
                    { label: "Library", route: "./breadcrumbs" },
                    { label: "Data" },
                  ]}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default BreadcrumbsEl;