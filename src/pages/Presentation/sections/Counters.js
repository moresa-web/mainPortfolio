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
import Divider from "@mui/material/Divider";

// Mohammadreza Sardashti components
import MKBox from "../../../components/MKBox";

import GetPresentationDatasClass from "../sections/PresentationDatas/GetPresentationDatas";

// Mohammadreza Sardashti examples
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {

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
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              editCallback={editCallback}
              count={viewDatas?.find((model) => model.location === "ProductCount")?.data[0]??0}
              key={1}
              number={1}
              suffix="+"
              title=              
              {loading ? (
                "Web Sites"
              ) : (
                <>{viewDatas?.find((model) => model.location === "DSTitle1")?.data[0]??"Web Sites"+' '}{" "}</>
              )}
              description=
              {loading ? (
                "Online Web Sites - You can find our experience with this number"
              ) : (
                <>{viewDatas?.find((model) => model.location === "DSText1")?.data[0]??"Online Web Sites - You can find our experience with this number"+' '}{" "}</>
              )}
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              editCallback={editCallback}
              count={15}
              key={2}
              number={2}
              suffix="+"
              title=              
              {loading ? (
                "Hapy Client"
              ) : (
                <>{viewDatas?.find((model) => model.location === "DSTitle2")?.data[0]??"Hapy Client"+' '}{" "}</>
              )}

              description=
              {loading ? (
                "We have only one goal and that is to get your complete satisfaction"
              ) : (
                <>{viewDatas?.find((model) => model.location === "DSText2")?.data[0]??"We have only one goal and that is to get your complete satisfaction"+' '}{" "}</>
              )}
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              editCallback={editCallback}
              count={4}
              key={3}
              number={3}
              title=              
              {loading ? (
                "Librarys"
              ) : (
                <>{viewDatas?.find((model) => model.location === "DSTitle3")?.data[0]??"Librarys"+' '}{" "}</>
              )}
              description=
              {loading ? (
                "you can use my librarys in your project in npm and nuget pakage"
              ) : (
                <>{viewDatas?.find((model) => model.location === "DSText3")?.data[0]??"you can use my librarys in your project in npm and nuget pakage"+' '}{" "}</>
              )}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
