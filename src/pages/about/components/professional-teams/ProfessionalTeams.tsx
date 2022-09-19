import React from 'react';
import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CustomIcons from 'components/custom-icons/CustomIcons';
import BG from 'assets/images/about/BG-3.png';
import ProFessionalTeams1 from 'assets/images/home/fess1.png';
import ProFessionalTeams2 from 'assets/images/home/fess2.png';
import ProFessionalTeams3 from 'assets/images/home/fess3.png';
import './ProfessionalTeams.css';

const useStyles = makeStyles((theme: any) => ({
    responseServiceItem: {
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
        },
    },
}));

const Slogan = () => {
    const classes = useStyles();

    return (
        <>
            <Box component="section" marginTop={'-358px'}>
                <img src={BG} alt="background" className="background-image-about" />
                <Box>
                    <Box paddingTop="153px">
                        <Box component="section">
                            <Typography
                                variant="subtitle2"
                                mb={2}
                                textAlign="center"
                                marginTop="362px"
                                marginBottom="12px"
                            >
                                Professional Teams
                            </Typography>
                            <Typography variant="h3" mb={2} textAlign="center">
                                The Professional expert
                            </Typography>
                            <Box component="p" textAlign="center" marginBottom="87px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                            </Box>
                        </Box>
                    </Box>
                    <Grid container pt={12.5} textAlign="center" className="professional-container">
                        <Grid item xs={0} sm={12} lg={4} md={4} className="professional-teams">
                            <Box>
                                <img src={ProFessionalTeams1} alt="FessionalTeams1" />
                            </Box>
                            <Box>
                                <Typography pt={5} variant="h4">
                                    Briyan Nevalli
                                </Typography>
                            </Box>
                            <Box>
                                <Typography pt={2} variant="subtitle2">
                                    Surgeon
                                </Typography>
                            </Box>
                            <Box>
                                <Typography pt={2} mb={2} variant="inherit">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.
                                </Typography>
                            </Box>
                            <Box>
                                <CustomIcons />
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={0}
                            sm={12}
                            lg={4}
                            md={4}
                            className="professional-teams professional-teams-active "
                        >
                            <Box>
                                <img src={ProFessionalTeams2} alt="FessionalTeams1" />
                            </Box>
                            <Box>
                                <Typography pt={5} variant="h4">
                                    Bella Sebastian
                                </Typography>
                            </Box>
                            <Box>
                                <Typography pt={2} variant="subtitle2">
                                    Dermatologist
                                </Typography>
                            </Box>
                            <Box>
                                <Typography pt={2} mb={2} variant="inherit">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.
                                </Typography>
                            </Box>
                            <Box>
                                <CustomIcons />
                            </Box>
                        </Grid>

                        <Grid item xs={0} sm={12} lg={4} md={4} className="professional-teams">
                            <Box>
                                <img src={ProFessionalTeams3} alt="FessionalTeams1" />
                            </Box>
                            <Box>
                                <Typography pt={5} variant="h4">
                                    Lilly Adams
                                </Typography>
                            </Box>
                            <Box>
                                <Typography pt={2} variant="subtitle2">
                                    Stylist expert
                                </Typography>
                            </Box>
                            <Box>
                                <Typography pt={2} mb={2} variant="inherit">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.
                                </Typography>
                            </Box>
                            <Box>
                                <CustomIcons />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Slogan;
