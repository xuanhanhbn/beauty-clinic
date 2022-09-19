import { Box, Typography, Grid } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

import './contact-page.css';
import ContactImg from 'assets/images/home/contact.png';
import ContactBackgroundImg from 'assets/images/home/BG-2.png';
import { CustomButton } from 'components';

const useStyles = makeStyles((theme: any) => ({
    responseImg: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap !important',
        },
    },
    responseInput: {
        [theme.breakpoints.down('md')]: {
            width: '100% !important',
        },
    },
}));

function ContactPage() {
    const classes = useStyles();

    return (
        <Box component="section" pt={12.5} pb ={19}>
            <img src={ContactBackgroundImg} alt="BackgroundContact" className="imgBackgroundContact" />
            <Grid container className={`contact-container ${classes.responseImg}`} gap={2}>
                <Grid item md={12}>
                    <img src={ContactImg} alt="ContactImg" />
                </Grid>
                <Grid item md={12}>
                    <Typography variant="subtitle2" mb={1.5}>
                        Contact us
                    </Typography>
                    <Typography variant="h3" mb={2.5}>
                        Send your inquiry to our expert team
                    </Typography>
                    <Typography variant="inherit" mb={2.5}>
                        Lorem ipsum dolor sit amet nulla turapis tellus.
                    </Typography>

                    <Box>
                        <Box
                            className={`contact-input ${classes.responseInput}`}
                            mb={5}
                            gap={2}
                            sx={{
                                width: 450,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth placeholder="First Name" />

                            <TextField fullWidth placeholder="Last Name" />
                        </Box>

                        <Box
                            className={classes.responseInput}
                            mb={5}
                            sx={{
                                width: 450,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth placeholder="Email Address" />
                        </Box>

                        <Box
                            className={classes.responseInput}
                            mb={5}
                            sx={{
                                width: 450,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth placeholder="Suject Message" />
                        </Box>
                        <Box mb={2.5}>
                            <TextareaAutosize
                            className={classes.responseInput}
                                maxRows={4}
                                aria-label="Your inquiry here"
                                placeholder="Your inquiry here"
                                style={{
                                    width: 450,
                                    height: 230,
                                    paddingTop: 15,
                                    paddingLeft: 25,
                                    fontFamily: '"Poppins", Sans-serif',
                                    fontSize: 14,
                                    borderRadius: 15,
                                    borderColor: '#d9ddfe',
                                }}
                            />
                        </Box>

                        <CustomButton variant="contained" color="secondary">
                            Send Message
                        </CustomButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactPage;
