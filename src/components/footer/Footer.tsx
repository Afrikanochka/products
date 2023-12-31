import { AppBar, Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <AppBar position="static">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box margin="1rem">
            <Typography>&copy; Copyright, Integrify, OTI, Apr 2023</Typography>
          </Box>
          {/* <FooterForm /> */}
          <Box margin="1rem">
            <Typography>Social media</Typography>
            <Link
              color="inherit"
              width="50"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              color="inherit"
              width="50"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              color="inherit"
              width="50"
              href="https://linkedin.com/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
      </AppBar>
    );
}

export default Footer;