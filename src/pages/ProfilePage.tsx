import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProfileBody from "../components/profile/ProfileBody";

const ProfilePage = () => {
    return (
        <Stack>
        <Box
          margin="80px 0 100px 0"
          position="relative"
          width="100%"
          minHeight="80vh"
          sx={{ backgroundColor: "background.default" }}
          zIndex="0"
        >
          <ProfileBody />
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

export default ProfilePage;