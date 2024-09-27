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

import axios from "axios";
import Cookies from "js-cookie";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Mohammadreza Sardashti components
import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography";

// Mohammadreza Sardashti components
import TransparentBlogCard from "../../../../examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "../../../../examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import Empty from "../../../../assets/images/products/Empty.jpg";
import post4 from "../../../../assets/images/examples/blog2.jpg";

import { motion } from 'framer-motion';
import Parser from "html-react-parser";

import ProductCart from "../../../../examples/Cards/ProductCarts/ProductCart";

function Places() {
  const defaultPosts =
  {
    name: "loading...",
    data: "loading",
    image: Empty
  };
  const defaultData = [defaultPosts, defaultPosts, defaultPosts];
  const [blogPosts, setBlogPosts] = useState([defaultData]);
  const [status, setStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  if (!status) {
    axios({
      mode: 'no-cors',
      headers: { Authorization: 'Bearer ' + Cookies.get('token') },
      url: `https://localhost:7239/api/v1/Blog/${pageNumber}/4`,
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
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            آخرین مقالات من
          </MKTypography>
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
  );
}

export default Places;

// <Grid item xs={12} sm={6} lg={3}>
//   <TransparentBlogCard
//     image={post.image ?? Empty}
//     title={post.name}
//     action={{
//       type: "internal",
//       route: `/blog/post?name=${post.url}`,
//       color: "info",
//       label: "بیشتر بخوانید",
//     }}
//   />
// </Grid>
