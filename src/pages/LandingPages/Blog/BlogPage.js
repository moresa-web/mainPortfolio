import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import TransparentBlogCard from "../../../examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "../../../examples/Cards/BlogCards/BackgroundBlogCard";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";

import axios from "axios";
import Cookies from "js-cookie";
import Parser from "html-react-parser";

// Images
import Empty from "../../../assets/images/products/Empty.jpg";

function BlogPage() {
  const defaultPosts =
  {
    name: "loading...",
    data: "loading",
    image: Empty,
    isBackground: false
  };
  const defaultData = [defaultPosts, defaultPosts, defaultPosts];
  const [blogPosts, setBlogPosts] = useState([defaultData]);
  const [blogCount, setBlogCount] = useState(3);
  const [status, setStatus] = useState(false);
  const [active, setActive] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(0);

  useEffect(() => {
    if (!status) {
      axios({
        mode: 'no-cors',
        headers: { Authorization: 'Bearer ' + Cookies.get('token') },
        url: `https://localhost:7239/api/v1/Blog/${pageNumber}/10`,
        withCredentials: true,
      })
        .then(function (response) {
          setBlogPosts(response.data.data);
          setStatus(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  function shortenText(text, maxLength = 20) {
    if(text === undefined) return;
    return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
}

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/contact-us",
          label: "Create WebSite",
          color: "info",
        }}
      />
      <MKBox pt={15} pb={3}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h3" mb={6} align="center">
                Latest Blog Posts
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} lg={4} key={post.id}>
                {post.isBackground ? (
                  <BackgroundBlogCard
                    image={post.image ?? Empty}
                    title={post.name}
                    description={post.data}
                    action={{
                      type: "internal",
                      route: post.url,
                      label: "read more",
                    }}
                  />
                ) : (
                  <TransparentBlogCard
                    image={post.image ?? Empty}
                    title={shortenText(post.name)}
                    action={{
                      type: "internal",
                      route: `/blog/post?name=${post.url}`,
                      color: "info",
                      label: "read more",
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default BlogPage;
