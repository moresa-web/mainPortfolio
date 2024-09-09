import React from "react";

import axios from "axios"; 

import Cookies from "js-cookie";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import { motion }  from 'framer-motion';

// Material Kit 2 PRO React components
import MKBox from "../../../../components/MKBox";
import MKPagination from "../../../../components/MKPagination";

import ProductStyle from "../../../../assets/theme/style/ProductStyle.css";
import ProductCart from "../../../../examples/Cards/ProductCarts/ProductCart";

import GetPresentationDatasClass from "../../../../sections/PresentationDatas/GetPresentationDatas";

// Images
import Empty from "../../../../assets/images/products/Empty.jpg";

function Product() {
  var defaultProducts = [
    {
      name: "Loading...",
      description: "Waiting...",
      images: Empty
    },
    {
      name: "Loading...",
      description: "Waiting...",
      images: Empty
    },
    {
      name: "Loading...",
      description: "Waiting...",
      images: Empty
    }
  ];
  const [product, setProduct] = React.useState(defaultProducts);
  const [productsCount, setProductsCount] = React.useState(3);
  const [status, setStatus] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(0);

  const [animate, setAnimate] = React.useState(true);

    function PaginateHandle(pageNumber) {
        // Update the product list based on the selected page number
        if(pageNumber === 0 || pageNumber === productsCount / 3 + 1) return;
        setAnimate(false);
        setPageNumber(pageNumber);
        setActive(pageNumber-1);
        axios({
          headers: { Authorization: 'Bearer ' + Cookies.get('token') },
          withCredentials: true,
            url: 'https://localhost:7239/api/v1/Product/Home/'+pageNumber+"/"+3
            })
          .then(function (response) {
            setProduct(response.data.data);
            setProductsCount(response.data.data[0].productsCount);
            setAnimate(true);
          })
          .catch(function (error) {
            console.log(error);
          });  
    }

  React.useEffect(() => {
    if(!status)
    {
        axios({
            mode: 'no-cors',
            headers: { Authorization: 'Bearer ' + Cookies.get('token') },
            url: 'https://localhost:7239/api/v1/Product/Home',
            withCredentials: true,
        })
        .then(function (response) {
            setProduct(response.data.data);
            setProductsCount(response.data.data[0].productsCount);
            console.log(response.data.data[0].images[0]);
            setStatus(true);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    });


  return (
    <>
        <div style={{overflowX: 'auto'}}>
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
   {product.map((object, i) => (
      <Grid item xs={12} md={6} lg={4} key={i}>
        <MKBox mt={3}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProductCart
              title={object.name}
              text={object.description}
              image={object.images[0]??Empty}
              button="Detail"
              price={object.price}
            />          
            </motion.div>
        </MKBox>
      </Grid>
    ))}
      </Grid>
      <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
        <MKPagination>
          <MKPagination onClick={() => PaginateHandle(pageNumber - 1)} item>
            <Icon>keyboard_arrow_left</Icon>
          </MKPagination>
          {Array(Math.ceil(productsCount / 3)).fill().map((_, index) => (
  <MKPagination onClick={() => PaginateHandle(index + 1)} item key={index} active={index === active}>{index + 1}</MKPagination>
))}
            <MKPagination onClick={() => PaginateHandle(pageNumber + 1)} item>
            <Icon>keyboard_arrow_right</Icon>
          </MKPagination>
        </MKPagination>
      </Grid>
      </Container>
    </MKBox>
    </div>
    </>
  );
}

export default Product;