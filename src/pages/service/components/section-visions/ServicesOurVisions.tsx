import React from "react";
import { Theme } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./services-our-visions.css";
import BG4a from "assets/images/about/BG4a.png";
import Animation1 from "assets/images/services/Animation1.png";
import Animation2 from "assets/images/services/services-animation2.png";
import Animation3 from "assets/images/services/services-animation3.png";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const useStyles = makeStyles((theme: Theme) => ({
  customLink: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      justifyContent: "center"
    },
  },
  customImg: {
    [theme.breakpoints.down("xs")]: {
      // width: "100% !important",
    },
  },
}));
function ServicesOurVisions() {
  const classes = useStyles();
  return (
    <Box>
      <Box component="section" mt={5}>
        {/* box 1  */}
        <Grid className="landing-page-about" container>
          <Grid
            item
            xs={12}
            lg={5}
            md={12}
            sm={12}
            className={`section-vision-img ${classes.customLink}`}
          >
            <img src={Animation1} alt="treatment"className={classes.customLink}/>
          </Grid>
          <Grid
            item
            className="section-vision-content"
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <Typography variant="subtitle2" mb={2} paddingTop="0">
                  Beauty Consultation
            </Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
                  We services beauty consultation
            </Typography>
            <Typography
              variant="subtitle1"
              mb={3}
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
               quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            </Typography>
            <Typography variant="h2" mb={2} fontSize="16px" lineHeight={"125%"}className="get-the-services-wrapper" >
               <Box className="get-the-services">  Get the Services
                 <KeyboardDoubleArrowRightIcon/>
                </Box>
            </Typography>
           
          </Grid>
        </Grid>
        {/* Box 2  */}
        <Grid container className="landing-page-about" mt={18}>
        <Grid
            item
            className="section-vision-content"
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <Typography variant="subtitle2" mb={2} paddingTop="0">
                  Skin Treatements
            </Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
                   Skin care and treatment by expert
            </Typography>
            <Typography
              variant="subtitle1"
              mb={3}
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
               quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            </Typography>
            <Typography variant="h2" mb={2} fontSize="16px" lineHeight={"125%"}className="get-the-services-wrapper" >
               <Box className="get-the-services">  Get the Services
                 <KeyboardDoubleArrowRightIcon/>
                </Box>
            </Typography>
           
          </Grid>
          <Grid
            item
            className={`section-vision-img ${classes.customLink}`}
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <img src={Animation2} alt="treatment" className={classes.customLink}/>
          </Grid>
        </Grid>
        {/* box 3  */}
        <Grid className="landing-page-about" container mt={18}>
          <Grid
            item
            xs={12}
            lg={5}
            md={12}
            sm={12}
            className={`section-vision-img ${classes.customLink}`}
          >
            <img src={Animation3} alt="treatment" className={classes.customLink}/>
          </Grid>
          <Grid
            item
            className="section-vision-content"
            xs={12}
            lg={5}
            md={12}
            sm={12}
          >
            <Typography variant="subtitle2" mb={2} paddingTop="0">
                   Beauty Product
            </Typography>
            <Typography variant="h2" mb={2} fontSize="36px" lineHeight={"125%"}>
                  We present quality beauty products
            </Typography>
            <Typography
              variant="subtitle1"
              mb={3}
              lineHeight="34px"
              color=" #8B8B8B;"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
               quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            </Typography>
            <Typography variant="h2" mb={2} fontSize="16px" lineHeight={"125%"}className="get-the-services-wrapper" >
               <Box className="get-the-services">  Get the Services
                 <KeyboardDoubleArrowRightIcon/>
                </Box>
            </Typography>
           
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ServicesOurVisions;
