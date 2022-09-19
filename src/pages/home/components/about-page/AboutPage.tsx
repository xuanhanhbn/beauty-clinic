import { Box, Typography, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CustomButton from 'components/custom-button/CustomButton';
import './about-page.css';
import imgAbout from 'assets/images/home/about.png';
import backgroundSideAbout from 'assets/images/home/BG-1.png';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const useStyles = makeStyles((theme: any) => ({
    responseHideAbout: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    responseFullWidthAbout: {
        [theme.breakpoints.down('md')]: {
            width: '80% !important',
        },
    },
    responseTextCenter: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center !important',
            justifyContent: 'center !important',
        },
    },
}));

function AboutPage() {
    const classes = useStyles();

    return (
        <Box component="section" pt={25}>
            <img src={backgroundSideAbout} alt="backgroundAbout" className="img-about" />

            <Grid container className="about-page" gap={2}>
                <Grid item className={`about-text ${classes.responseFullWidthAbout}`}>
                    <Typography className={classes.responseTextCenter} variant="subtitle2" textAlign="left" mb={1.5}>
                        About us
                    </Typography>
                    <Typography className={classes.responseTextCenter} variant="h3" textAlign="left" mb={2.5}>
                        We are the best beauty clinic
                    </Typography>
                    <Box className={classes.responseTextCenter}>
                        <Typography variant="inherit" textAlign="left" fontSize={16}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.
                            Varius tellus in suspendisse placerat.
                        </Typography>
                        <Typography variant="inherit" textAlign="left" fontSize={16} mb={2.5}>
                            <br />
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </Typography>
                    </Box>
                    <Grid className={`about-btn ${classes.responseTextCenter}`}>
                        <CustomButton variant="contained" color="secondary">
                            Learn More
                        </CustomButton>
                        <Grid className={`btn-watch ${classes.responseHideAbout}`}>
                            <Typography className="btn-link">
                                <Link href="#" variant="body2">
                                    <PlayArrowRoundedIcon className="icon-plays" />
                                </Link>
                            </Typography>
                            <Typography fontSize={20} pl={2}>
                                Watch Video
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={`about-img ${classes.responseHideAbout}`} ml={8}>
                    <img src={imgAbout} alt="imgAbout" width="476" height="350" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutPage;
