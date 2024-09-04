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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Mohammadreza Sardashti components
import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography";

import EditPresentationDatas from "../../../../pages/Presentation/sections/PresentationDatas/EditPresentationDatas";

function DefaultCounterCard({ number, color, count, title, description, editCallback, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1} onDoubleClick={() => EditPresentationDatas("DSTitle"+number, "index", editCallback)}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text" onDoubleClick={() => EditPresentationDatas("DSText"+number, "index", editCallback)}>
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}


// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
