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
import Icon from "@mui/material/Icon";
import { useState } from 'react';

// Mohammadreza Sardashti components
import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography"; // Added the missing import for MKTypography component
import bgImage from "../../../../components/MKTypography";

import EditPresentationDatas from "../../sections/PresentationDatas/EditPresentationDatas";
import GetPresentationDatasClass from "../../sections/PresentationDatas/GetPresentationDatas";

function BuiltByDevelopers() {

        const [loading, setLoading] = useState(true);
        const [bgImageUrl, setBgImageUrl] = useState("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg");
        const [builtByDevelopersTitle, setBuiltByDevelopersTitle] = useState("Built by developers");
        const [builtByDevelopersText, setBuiltByDevelopersText] = useState("From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you will create unlimited combinations for our components");
        const [viewDatas, setViewDatas] = useState([]);

        const editCallback = async (json, location) => {
                const newData = [...viewDatas]; // create a copy of the original array
                const foundModel = newData.find((model) => model.location === location);
                if (foundModel) {
                        foundModel.data[0] = json;
                }
                setViewDatas(newData);
        };

        const callback = async (datas) => {
                if (datas.length > 0) {
                        setViewData(datas);
                        setLoading(false);
                }
        }

        if (loading === true) {
                const presentationData = new GetPresentationDatasClass();
                presentationData.GetPresentationDatas(callback);
        }

        const setViewData = (viewDatas) => {
                setBgImageUrl(viewDatas?.find((model) => model.location === "backgroundImage")?.data[0] ?? bgImageUrl);

                setBuiltByDevelopersTitle(viewDatas?.find((model) => model.location === "BuiltByDevelopersTitle")?.data[0] ?? builtByDevelopersTitle);

                setBuiltByDevelopersText(viewDatas?.find((model) => model.location === "BuiltByDevelopersText")?.data[0] ?? builtByDevelopersText);
        }

        return (
                <MKBox
          display="flex"
          alignItems="center"
          borderRadius="xl"
          my={2}
          py={6}
          sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                  `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                  )}, url(${bgImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
          }}
        >
            <Container>
                <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
                    <MKTypography variant="h4" color="white" fontWeight="bold">
                        Built by developers
                    </MKTypography>
                    <MKTypography variant="h1" color="white" mb={1}>
                        {builtByDevelopersTitle}
                    </MKTypography>
                    <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                        {builtByDevelopersText}
                    </MKTypography>
                    <MKTypography
                        component="a"
                        href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
                        target="_blank"
                        rel="noreferrer"
                        variant="body2"
                        color="white"
                        fontWeight="regular"
                        sx={{
                            display: "flex",
                            alignItems: "center",
    
                            "& .material-icons-round": {
                                fontSize: "1.125rem",
                                transform: `translateX(3px)`,
                                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                            },
    
                            "&:hover .material-icons-round, &:focus .material-icons-round": {
                                transform: `translateX(6px)`,
                            },
                        }}
                    >
                        Read docs <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                </Grid>
            </Container> 
            </MKBox>
        );
}

export default BuiltByDevelopers;