import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './services-slogan.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Doremon from 'assets/images/services/BG-Mask.png';

const useStyles = makeStyles((theme: any) => ({
    customsServicesSlogan: {
        [theme.breakpoints.down('lg')]: {
            display: 'block !important',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '116px !important',
            paddingBottom: '116px !important',
        },
    },
    serviceCustomers: {
        [theme.breakpoints.down('lg')]: {
            width: '100% !important',
            justifyContent: 'center !important',
        },
    },
    serviceCustomersItem: {
        [theme.breakpoints.down('lg')]: {
            display: 'flex !important',
            justifyContent: 'center !important',
        },
    },
    TreatmentsVideos: {
        [theme.breakpoints.down('lg')]: {
            marginLeft: '100px !important',
            width: '100% !important',
        },
    },
    serviceCustomersItemLeft: {
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0px !important',
        },
    },
    serviceCustomersItemLeftContent: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));

const ServicesSlogan = () => {
    const [showpopPupVideo, setpopPupVideo] = useState(false);
    const classes = useStyles();
    return (
        <>
            <Box
                component="section"
                className="services-slogan"
                marginTop={'150px'}
                marginBottom={'112px'}
                minHeight={'529px'}
            >
                <Box className="services-slogan-background">
                    {showpopPupVideo && (
                        <Box className="popPupVideo">
                            <Box>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/uYZN4RbTAhs"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                                <Box className="popPupVideoClose" onClick={() => setpopPupVideo(!showpopPupVideo)}>
                                    X
                                </Box>
                            </Box>
                        </Box>
                    )}
                    <Container maxWidth="lg">
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            pt={23}
                            ml="auto"
                            mr="auto"
                            className={`${classes.customsServicesSlogan}`}
                        >
                            <Box width="50%" className={`${classes.serviceCustomers}`}>
                                <Typography
                                    variant="h3"
                                    mb={2.5}
                                    pl={0.5}
                                    pr={1.5}
                                    color="white"
                                    fontSize="36px"
                                    className={`${classes.serviceCustomersItem}`}
                                >
                                    Best responsibility and service for our customers
                                </Typography>
                                <Typography variant="inherit" pt={2} className={`${classes.serviceCustomersItem}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis
                                </Typography>
                            </Box>
                            <Box width="49.5%" ml={18} className={`${classes.serviceCustomersItemLeft}`}>
                                <Box display="flex" alignItems={'center'}>
                                    <Box className="services-slogan-icon-play" color="white">
                                        <PlayCircleOutlineIcon onClick={() => setpopPupVideo(!showpopPupVideo)} />
                                    </Box>
                                    <Box ml={10} className={`${classes.serviceCustomersItemLeftContent}`}>
                                        <Typography
                                            variant="h6"
                                            color="white"
                                            className={`services-slogan-treatments-video ${classes.TreatmentsVideos}`}
                                        >
                                            Treatments Videos
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default ServicesSlogan;
