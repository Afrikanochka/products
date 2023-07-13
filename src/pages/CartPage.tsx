import { Stack, Box } from "@mui/material";

import CartBody from "../components/cart/CartBody";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const CartPage = () => {
    return (
    <Stack>
       <Box
       margin="80px 0"
       position="relative"
       width="100%"
       minHeight="80vh"
       sx={{ backgroundColor: "background.default" }}
       >
        <CartBody />
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

export default CartPage;