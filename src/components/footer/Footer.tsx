import React from "react";
import { Box, List, ListItem ,Typography} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import footerLogo from "assets/images/about/footerLogo.png";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box overflow="hidden" className="bg-ft">
      {/* <img
        src={footer_bg1}
        alt="background"
        className="background-image-footer"
      /> */}
      <Box maxWidth={"1152px"} margin="0 auto">
        <Box className="footer-bg1" pt={30}>
          <Box className="footer-size-bar">
            <Box className="footer-size-bar-left">
              <Box className="footer-size-bar-content">
                <Box mb={2}>
                  <img src={footerLogo} alt=""></img>
                </Box>
                <Box className="footer-size-bar-content-text">
                  <Box className="footer-size-bar-text">
                    Beautice is a Beauty Clinic WordPress Theme.
                  </Box>
                  <Box className="footer-size-bar-address">
                    Baker Steet 101, NY, United States.
                  </Box>
                  <Box className="footer-size-bar-mail-phone">
                    <Box className="footer-size-bar-phone" display={"flex"} alignItems="center">
                      <ArrowRightIcon />
                      521 569 8966.
                    </Box>
                    <Box className="footer-size-bar-mail">
                      mail@company.com.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="footer-size-bar-right">
              <Box className="size-map">
                <Box>
                  <Typography variant="h4" paddingLeft={1.2} fontSize="18px">Pages</Typography>
                  <List>
                    <ListItem>
                      <ArrowRightIcon />
                      Home
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      About
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Services
                    </ListItem>
                    <ListItem>
                      {" "}
                      <ArrowRightIcon />
                      Gallery
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Team
                    </ListItem>
                  </List>
                </Box>
                <Box className="informations" mb={18}>
                <Typography variant="h4" paddingLeft={1.2} fontSize="18px">Informations</Typography>
                  <List>
                    <ListItem>
                      <ArrowRightIcon />
                      About
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Services
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Gallery
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Team
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="logo-alt-desain" width={"100%"} display="flex" justifyContent="space-between" mb={10} alignItems="center">
             <Box className="social-media">
                <Box className="social-media-logo" >
                 <FacebookIcon fontSize="large" />
                </Box>
                <Box className="social-media-logo">
                <TwitterIcon fontSize="large"/>
                </Box>
                <Box className="social-media-logo">
                <LinkedInIcon fontSize="large"/>
                </Box>
                <Box className="social-media-logo">
                <YouTubeIcon fontSize="large"/>
                </Box>
                <Box className="social-media-logo">
                <InstagramIcon fontSize="large"/>
                </Box>
              </Box>
               <Box className="alt-desain">
                 <Box> © AltDesain Studio 2021 - All right reserved.</Box>
                </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
