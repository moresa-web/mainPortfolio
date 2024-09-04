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

// Mohammadreza Sardashti base styles
import colors from "../base/colors";

// Mohammadreza Sardashti helper functions
import rgba from "../functions/rgba";
import pxToRem from "../functions/pxToRem";

const { dark, white } = colors;

export default {
  styleOverrides: {
    root: {
      background: rgba(dark.main, 0.2),
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      background: rgba(dark.main, 0.2),
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      background: rgba(white.main, 0.2),

      "&.MuiDivider-vertical": {
        background: rgba(white.main, 0.2),
      },
    },
  },
};
