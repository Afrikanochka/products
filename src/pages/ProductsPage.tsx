import { useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { useAppDispatch } from "../hooks/reduxHooks";
import Footer from "../components/footer/Footer";

const ProductsPage = () => {
    return (
        <Stack>
      <Box
        margin="80px 0 90px 0"
        position="relative"
        width="100%"
        minHeight="80vh"
        sx={{ backgroundColor: "background.default" }}
        display="flex"
      >    
        
      </Box>     
      <Box position="fixed" bottom="0" overflow="hidden" width="100%">
        <Footer />
      </Box>
    </Stack>
    );
}

export default ProductsPage;