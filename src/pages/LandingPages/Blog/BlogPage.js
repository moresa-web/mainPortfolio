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

import { motion } from 'framer-motion';
import Parser from "html-react-parser";

import ProductCart from "../../../examples/Cards/ProductCarts/ProductCart";

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

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/contact",
          label: "طراحی سایت",
          color: "info",
        }}
      />
      <MKBox pt={15} pb={3}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={8}>
              <MKTypography variant="h3" mb={6} align="center">
                آخرین مقالات من
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {blogPosts.map((post, i) => (
              <Grid item xs={12} md={6} lg={4} key={i}>
                <MKBox mt={3}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <ProductCart
                      title={post.name}
                      text={post.data ? Parser(post.data.slice(0, 140)) : 'loading...'}
                      image={post.image ?? Empty}
                      button="Detail"
                      route={"/blog/post?name=" + post.url}
                    />
                  </motion.div>
                </MKBox>
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
