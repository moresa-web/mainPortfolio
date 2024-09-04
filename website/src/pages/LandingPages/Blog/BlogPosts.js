import React from "react";
import { useLocation } from "react-router-dom"; // برای دسترسی به query params
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";

// تصاویر پست‌ها
import post1 from "../../../assets/images/examples/testimonial-6-2.jpg";
import post2 from "../../../assets/images/examples/testimonial-6-3.jpg";
import post3 from "../../../assets/images/examples/blog-9-4.jpg";

const blogPosts = [
  {
    id: 1,
    image: post1,
    title: "Rover raised $65 million",
    description: "Finding temporary housing for your dog should be as easy as renting an Airbnb...",
    content: "Here is the full content of the post about Rover...",
  },
  {
    id: 2,
    image: post2,
    title: "MateLabs machine learning",
    description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT...",
    content: "Here is the full content of the post about MateLabs...",
  },
  {
    id: 3,
    image: post3,
    title: "Flexible work hours",
    description: "Rather than worrying about switching offices every couple years...",
    content: "Here is the full content of the post about flexible work hours...",
  },
];

function BlogDetailPage() {
  const location = useLocation(); // برای دریافت location
  const queryParams = new URLSearchParams(location.search); // دریافت query params از URL
  const id = queryParams.get("id"); // دریافت مقدار id از query params

  const post = blogPosts.find((post) => post.id === parseInt(id)); // پیدا کردن پست بر اساس id

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
                <img src={post.image} alt={post.title} style={{ width: "100%", borderRadius: "8px" }} />
              </MKBox>
              <MKTypography variant="h2" mb={3}>
                {post.title}
              </MKTypography>
              <MKTypography variant="body1" mb={3}>
                {post.description}
              </MKTypography>
              <MKTypography variant="body2" color="textSecondary" mb={3}>
                {post.content}
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default BlogDetailPage;
