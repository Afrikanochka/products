import { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import Header from "../components/header/Header";
import ProductBody from "../components/product/ProductBody";
import Footer from "../components/footer/Footer";

const ProductPage = () => {
    const id: string = useParams().id || "";
    const dispatch = useAppDispatch();
    
    return (
        <Stack>
        <Box
          margin="80px 0"
          position="relative"
          width="100%"
          minHeight="80vh"
          sx={{ backgroundColor: "background.default" }}
        >
          <ProductBody />
        </Box>
        <Box position="fixed" top="0" overflow="hidden" width="100%">
          <Header />
        </Box>
        <Box position="fixed" bottom="0" overflow="hidden" width="100%">
          <Footer />
        </Box>
      </Stack>  
    );
}

export default ProductPage;