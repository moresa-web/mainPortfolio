import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom"; // برای دسترسی به query params
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";


function BlogDetailPage() {

  const [post, setPost] = useState();
  const [status, setStatus] = useState(false);
  const location = useLocation(); // برای دریافت location
  const queryParams = new URLSearchParams(location.search); // دریافت query params از URL
  const name = queryParams.get("name"); // دریافت مقدار id از query params


  useEffect(() => {
    if (!status) {
      axios({
        headers: { Authorization: 'Bearer ' + Cookies.get('token') },
        url: `https://localhost:7239/api/v1/Blog/${name}`,
        withCredentials: true,
      })
        .then(function (response) {
          setPost(response.data.data);
          setStatus(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  if (!post) {
    return (
      <MKBox py={6}>
        <Container>
          <MKTypography variant="h4" align="center">
            Post not found!
          </MKTypography>
        </Container>
      </MKBox>
    );
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
      />
      <MKBox py={6}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={8}>
              <MKBox mb={3}>
                <img src={post.image} alt={post.name} style={{ width: "100%", borderRadius: "8px" }} />
              </MKBox>
              <MKTypography variant="h2" mb={3}>
                {post.title}
              </MKTypography>
              <MKTypography variant="body1" mb={3}>
                {post.data}
              </MKTypography>
              {/* <MKTypography variant="body2" color="textSecondary" mb={3}>
                {post.content}
              </MKTypography> */}
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default BlogDetailPage;
