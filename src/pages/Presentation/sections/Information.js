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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Mohammadreza Sardashti components
import MKBox from "../../../components/MKBox";

// Mohammadreza Sardashti examples
import RotatingCard from "../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "../../../assets/images/rotating-card-bg-front.jpeg";
import bgBack from "../../../assets/images/rotating-card-bg-back.jpeg";

import GetPresentationDatasClass from "./PresentationDatas/GetPresentationDatas";
import EditPresentationDatas from "./PresentationDatas/EditPresentationDatas";

function Information() {

  const [viewDatas, setViewDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const editCallback = async (json, location) => {
    const newData = [...viewDatas]; // create a copy of the original array
    const foundModel = newData.find((model) => model.location === location);
    if (foundModel) {
      foundModel.data[0] = json;
    }
    setViewDatas(newData);
  };
  const callback = (json) => {
    setViewDatas(json);
    setLoading(false);
  }

  if(loading == true)
    {
      const presentationData = new GetPresentationDatasClass();
      presentationData.GetPresentationDatas(callback);
      setLoading(false);
    }

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    کارت
                    <br />
                    را لمس کنید
                  </>
                }
                description="تا بتوانید یک از جذابیت های css را احساس کنید شما هم میتوانید به سادگی این کارت را درست کنید. 🤩"
              />
              <RotatingCardBack
                image={bgBack}
                title="صرفه جویی زمان"
                description="شما در زمان زیادی صرفه جویی خواهید کرد که از نمونه سازی به کدهای کامل عملکردی می پردازید زیرا همه عناصر پیاده سازی شده اند."
                action={{
                  type: "internal",
                  route: "/blog",
                  label: "همین حالا شروع کن",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title={loading ? (
                    "Full Documentation"
                  ) : (
                    <>{viewDatas?.find((model) => model.location === "D1S1Title")?.data[0]??"Full Documentation"}</>
                  )}
                  description={loading ? (
                    "Built by developers for developers. Check the foundation and you will findeverything inside our documentation."
                  ) : (
                    <>{viewDatas?.find((model) => model.location === "D1S1Text")?.data[0]??"Built by developers for developers. Check the foundation and you will findeverything inside our documentation."}</>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="MUI Ready"
                  description="The world's most popular react components library for building user interfaces."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
