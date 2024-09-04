import React, { useState } from 'react';
import MKButton from "../../../components/MKButton";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazy-load';

// @mui material components
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 PRO React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";

const ProductCart = ({ title, text, image, button, price }) => {
    const [show, setShow] = useState(false);
    const toggleModal = () => setShow(!show);

  return (
    <>
      <div className="card">
        <LazyLoad>
          <LazyLoadImage src={image} alt={title} id={title} />
        </LazyLoad>
        <h2>{title}</h2>
        <p>{text}</p>
        <div style={{ textAlign: "left" }}>
          <MKButton variant="outlined" color="info" onClick={toggleModal}>
            {button}
          </MKButton>
        </div>
      </div>

      <MKBox component="section" py={6}>
        <Container>
          <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
            <Slide direction="down" in={show} timeout={500}>
              <MKBox
                position="relative"
                width="300px"
                display="flex"
                flexDirection="column"
                borderRadius="xl"
                bgColor="white"
                shadow="xl"
              >
                <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                  <MKTypography variant="h5">{title}</MKTypography>
                  <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                </MKBox>
                <Divider sx={{ my: 0 }} />
                <MKBox p={2}>
                 <LazyLoad>
                   <LazyLoadImage className='ModalImage' src={image} alt={title} id={title} width="100px" />
                 </LazyLoad>
                 <MKBox display="flex" justifyContent="space-between">
                   <MKTypography variant="body2" color="secondary" fontWeight="regular">
                     {text}
                   </MKTypography>
                   <MKTypography variant="body2" color="secondary" fontWeight="regular">
                    {price}
                    </MKTypography>                 
                </MKBox>
                </MKBox>
                <Divider sx={{ my: 0 }} />
                <MKBox display="flex" justifyContent="space-between" p={1.5}>
                  <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                    close
                  </MKButton>
                  <MKButton variant="gradient" color="info">
                    💲Buye
                  </MKButton>
                </MKBox>
              </MKBox>
            </Slide>
          </Modal>
        </Container>
      </MKBox>
    </>
  );
};

export default ProductCart;