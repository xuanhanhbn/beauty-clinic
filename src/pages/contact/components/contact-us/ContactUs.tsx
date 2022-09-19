import { Box, Typography, Grid } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import './contact-us.css';
import ContactUsImg from 'assets/images/contact/animation-contacts.png';
import Bubble1 from 'assets/images/contact/Bubble1.png';
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
    PaddingInput: {
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '0 !important',
        },
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="section" pt={12.5} pb={19}>
                <img src={Bubble1} alt="BackgroundContact" className="imgBackgroundContacts" />
                <Grid container className={`contact-container ${classes.responseImg}`} gap={2}>
                    <Grid item md={12} width="100%">
                        <Typography variant="subtitle2" mb={1.5}>
                            Contact us
                        </Typography>
                        <Typography variant="h3" mb={2.5} pl={0.5} pr={1.5}>
                            Contact service for our customers
                        </Typography>
                        <img src={ContactUsImg} alt="ContactImg" />
                    </Grid>
                    <Grid item md={12}>
                        <Typography
                            variant="inherit"
                            mb={2.5}
                            pt={4}
                            pb={6}
                            pl={22}
                            pr={2}
                            className={`${classes.PaddingInput}`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
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
                                className={`contact-input ${classes.responseInput}`}
                                mb={5}
                                sx={{
                                    width: 450,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth placeholder="Email Address" />
                            </Box>

                            <Box
                                className={`contact-input ${classes.responseInput}`}
                                mb={5}
                                sx={{
                                    width: 450,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth placeholder="Suject Message" />
                            </Box>
                            <Box mb={2.5} className={`contact-input `}>
                                <TextareaAutosize
                                    className={`contact-input-bottom ${classes.responseInput}`}
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
            <Box className="google-maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.126753266187!2d105.78242!3d21.03015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b45ca965a5%3A0x2ef40f043f590681!2zQuG7h25oIFZp4buHbiAxOSAtIDggQuG7mSBDw7RuZyBBbg!5e0!3m2!1svi!2s!4v1663122319384!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    loading="lazy"
                ></iframe>
            </Box>
            <Box mb={1} width="100%" height="100%" pt={55}></Box>
        </>
    );
};

export default ContactUs;
