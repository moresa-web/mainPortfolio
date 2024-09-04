/* eslint-disable no-param-reassign */
/**
=========================================================
* Mohammadreza Sardashti - v2.1.0
=========================================================

* Product Page: /pages/landing-pages/contact-us
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Mohammadreza Sardashti components
import MKBox from "../../../../../../components/MKBox";

// Mohammadreza Sardashti examples
import DefaultNavbar from "../../../../../../examples/Navbars/DefaultNavbar";

// Routes
import routes from "../../../../../../routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
            route: "/pages/landing-pages/contact-us",
          label: "Create WebSite",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
