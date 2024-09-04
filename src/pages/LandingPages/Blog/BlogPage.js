import React from "react";
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

// تصاویر پست‌ها
import post1 from "../../../assets/images/examples/testimonial-6-2.jpg";
import post2 from "../../../assets/images/examples/testimonial-6-3.jpg";

function BlogPage() {
  // آرایه‌ای از پست‌های وبلاگ
  const blogPosts = [
    {
      id: 1,
      image: post1,
      title: "Rover raised $65 million",
      description: "Finding temporary housing for your dog should be as easy as renting an Airbnb...",
      route: "/pages/landing-pages/blog/post?id=1",
      isBackground: false,
    },
    {
      id: 2,
      image: post2,
      title: "MateLabs machine learning",
      description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT...",
      route: "/pages/landing-pages/blog/post?id=2",
      isBackground: false,
    },
    {
      id: 3,
      image: post2,
      title: "MateLabs machine learning",
      description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT...",
      route: "/pages/landing-pages/blog/post?id=3",
      isBackground: false,
    },
  ];

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
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    action={{
                      type: "internal",
                      route: post.route,
                      label: "read more",
                    }}
                  />
                ) : (
                  <TransparentBlogCard
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    action={{
                      type: "internal",
                      route: post.route,
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
