// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Mohammadreza Sardashti components
import MKTypography from "./components/MKTypography";

// Images
import logo from "./assets/images/profile.webp";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "محمدرضا سردشتی",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/moresa-web",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/moresa-web",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/moresa-web",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@moresa-web",
    },
  ],
  menus: [
    {
      name: "کاربری",
      items: [
        { name: "ورود", route: "/sign-in" },
        { name: "ثبت نام", route: "/sign-up" }
      ],
    },
    {
      name: "من",
      items: [
        { name: "تماس با من", route: "/contact" },
        { name: "درباره من", route: "/about" },
      ],
    },
    {
      name: "دیگر لینک ها",
      items: [
        { name: "وبلاگ", route: "/blog" },
      ],
    }
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      تمامی حقوق محفوض است &copy; {date} {" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        محمدرضا سردشتی
      </MKTypography>
      .
    </MKTypography>
  ),
};
