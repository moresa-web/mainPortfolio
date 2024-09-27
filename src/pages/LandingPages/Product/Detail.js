import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, Link } from "react-router-dom"; // برای دسترسی به query params
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import MKButton from "../../../components/MKButton";
import MKAvatar from "../../../components/MKAvatar";
import MKTypography from "../../../components/MKTypography";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";
import Parser from "html-react-parser";
import { Helmet } from 'react-helmet';
import { Card, Icon } from "@mui/material";
import Posts from "../../LandingPages/Author/sections/Posts";
import { isMobile } from 'react-device-detect';

// Images
import bgImage from "../../../assets/images/city-profile.jpg";
import Empty from "../../../assets/images/products/Empty.jpg";
import profileImage from "../../../assets/images/profile.webp";

function ProductDetail() {

  const [post, setPost] = useState({
    name: "loading",
    data: "loading",
    image: Empty
  });
  const [keyWords, setKeyWords] = useState("");
  const location = useLocation(); // برای دریافت location
  const queryParams = new URLSearchParams(location.search); // دریافت query params از URL
  const name = queryParams.get("name"); // دریافت مقدار id از query params

  useEffect(() => {
    axios({
      headers: { Authorization: 'Bearer ' + Cookies.get('token') },
      url: `https://localhost:7239/api/v1/Product/Home/${name}`,
      withCredentials: true,
    })
      .then(function (response) {
        console.log(response.data.data);
        setPost(response.data.data);
        setKeyWords(response.data.data.tags.map(tag => tag.data).join(', '));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [name]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": name
    },
    "headline": post.name,
    "image": post.image, // URL تصویر اصلی مقاله
    "datePublished": post.insertTime, // تاریخ انتشار
    // "dateModified": modifiedDate || publishedDate, // تاریخ ویرایش (اگر وجود دارد)
    "author": {
      "@type": "Person",
      "name": "محمدرضا سردشتی"
    },
    "publisher": {
      "@type": "Person",
      "name": "محمدرضا سردشتی",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "description": post.data // توضیحات کوتاه از مقاله
  };

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="keywords" content={keyWords} />
        <meta name="description" content={name} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/contact-us",
          label: "طراحی سایت",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          py={6}
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${isMobile ? post.image : bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
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

          <MKBox component="section" py={{ xs: 6, sm: 12 }}>
            <Container>
              <Grid container item xs={12} justifyContent="center" mx="auto">
                <MKBox mt={{ xs: -16, md: isMobile ? -20 : -35 }} textAlign="center">
                  <MKAvatar src={isMobile ? profileImage : post.image} alt={post.name} size={isMobile ? "xxl" : "max"} shadow="max" />
                </MKBox>
                <Grid container justifyContent="center" py={6}>
                  <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                    <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <MKTypography variant="h3">{post.name}</MKTypography>
                      {/* <MKButton>
                        <MKButton variant="" color="info" size="small" style={{ fontSize: "x-large" }}>
                          👍
                        </MKButton>
                        <MKButton variant="" color="info" size="small" style={{ fontSize: "x-large" }}>
                          👎
                        </MKButton>
                      </MKButton> */}
                    </MKBox>
                    <Grid container spacing={3} mb={3}>
                      <Grid item>
                        <MKTypography component="span" variant="body2" color="text">
                          بازدید:
                        </MKTypography>
                        <MKTypography component="span" variant="body2" fontWeight="bold">
                          &nbsp;{post.view}
                        </MKTypography>
                      </Grid>
                      <Grid item>
                        <MKTypography component="span" variant="body2" color="text">
                          زمان مطالعه:
                        </MKTypography>
                        <MKTypography component="span" variant="body2" fontWeight="bold">
                          &nbsp;{post.studyTime}
                        </MKTypography>
                      </Grid>
                    </Grid>
                    <MKTypography variant="body1" fontWeight="light" color="text">
                      {Parser(post.data)}
                      <MKTypography
                        component="a"
                        href="#"
                        variant="body1"
                        fontWeight="light"
                        color="info"
                        mt={3}
                        sx={{
                          width: "max-content",
                          display: "flex",
                          alignItems: "center",

                          "& .material-icons-round": {
                            transform: `translateX(3px)`,
                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                          },

                          "&:hover .material-icons-round, &:focus .material-icons-round": {
                            transform: `translateX(6px)`,
                          },
                        }}
                      >
                        <Link to="/blog">
                          <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon> بازگشت به مقالات
                        </Link>
                      </MKTypography>
                    </MKTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        <Posts />
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ProductDetail;