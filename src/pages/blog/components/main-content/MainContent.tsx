import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { CustomButton } from 'components';
import { CustomInput } from 'components';
import imgContent1 from 'assets/images/blog/unsplash_3ewkNkfJj2k.png';
import imgContent2 from 'assets/images/blog/unsplash_7tDGb3HrITg.png';
import imgContent3 from 'assets/images/blog/unsplash_0_McYfdyEDA.png';
import './main-content.css';

const useStyles = makeStyles((theme: any) => ({
    responseContent: {
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap !important',
            justifyContent: 'center',
        },
    },
}));
function MainContent() {
    const classes = useStyles();

    return (
        <>
            <Box component="section">
                <Grid container className={`blog-content ${classes.responseContent}`} gap={8}>
                    <Grid item className="left-container">
                        <Box>
                            <img src={imgContent1} alt="imgContent1" />
                        </Box>
                        <Box className="title-content_blog">
                            <Box>
                                <Box display="flex" mb={3} className="list-icon_blog">
                                    <Box component="span">
                                        <PersonIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            kuebantal
                                        </Link>
                                    </Box>
                                    <Box component="span">
                                        <CalendarMonthIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            November 23, 2021
                                        </Link>
                                    </Box>
                                    <Box component="span">
                                        <FolderIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            Consultation
                                        </Link>
                                    </Box>
                                </Box>
                                <Box mb={2.5}>
                                    <Typography variant="h3">
                                        How much does a consultation cost at our clinic?
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ margin: '32px 0' }}>
                                    <Typography sx={{ fontSize: '16px' }} variant="inherit">
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the
                                        charm of existence in this spot, which was created for the…
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomButton variant="contained" color="secondary">
                                        Continue
                                        <ArrowRightIcon fontSize="large" />
                                    </CustomButton>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <img src={imgContent2} alt="imgContent2" />
                        </Box>
                        <Box className="title-content_blog">
                            <Box>
                                <Box display="flex" mb={3} className="list-icon_blog">
                                    <Box component="span">
                                        <PersonIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            kuebantal
                                        </Link>
                                    </Box>
                                    <Box component="span">
                                        <CalendarMonthIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            November 23, 2021
                                        </Link>
                                    </Box>
                                    <Box component="span">
                                        <FolderIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            Beauty
                                        </Link>
                                    </Box>
                                </Box>
                                <Box mb={2.5}>
                                    <Typography variant="h3">
                                        Be careful! don’t choose the wrong beauty product
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ margin: '32px 0' }}>
                                    <Typography sx={{ fontSize: '16px' }} variant="inherit">
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the
                                        charm of existence in this spot, which was created for the…
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomButton variant="contained" color="secondary">
                                        Continue
                                        <ArrowRightIcon fontSize="large" />
                                    </CustomButton>
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <img src={imgContent3} alt="imgContent3" />
                        </Box>
                        <Box className="title-content_blog">
                            <Box>
                                <Box display="flex" mb={3} className="list-icon_blog">
                                    <Box component="span">
                                        <PersonIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            kuebantal
                                        </Link>
                                    </Box>
                                    <Box component="span">
                                        <CalendarMonthIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            November 23, 2021
                                        </Link>
                                    </Box>
                                    <Box component="span">
                                        <FolderIcon />
                                        <Link href="#" color="inherit" underline="none">
                                            Treatments
                                        </Link>
                                    </Box>
                                </Box>
                                <Box mb={2.5}>
                                    <Typography variant="h3">About skin care you need to know</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ margin: '32px 0' }}>
                                    <Typography sx={{ fontSize: '16px' }} variant="inherit">
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoy with my whole heart. I am alone, and feel the
                                        charm of existence in this spot, which was created for the…
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomButton variant="contained" color="secondary">
                                        Continue
                                        <ArrowRightIcon fontSize="large" />
                                    </CustomButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item className="right-container">
                        <Box>
                            <CustomInput />
                        </Box>
                        <Box mt={10} className="block-1">
                            <Box>
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Recent Posts
                                    </Typography>
                                    <List className="list-question">
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                How much does a consultation cost at our clinic?
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Be careful! don’t choose the wrong beauty product
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                About skin care you need to know
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Tips for starting facial treatments that start early
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Why are beauty treatments needed today?
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="block-1">
                            <Box>
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Blog Categories
                                    </Typography>
                                    <List className="list-question">
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Beauty
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Consultation
                                            </Link>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0', marginBottom: '10px' }}>
                                            <Link href="#" underline="none">
                                                Treatments
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="block-1">
                            <Box className="list-tags">
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Tags Cloud
                                    </Typography>
                                    <Box component="p" className="">
                                        <Link fontSize="22pt" href="#" underline="none">
                                            beauty
                                        </Link>
                                        <Link fontSize="16.4pt" href="#" underline="none">
                                            clinic
                                            <br />
                                        </Link>
                                        <Link fontSize="8pt" href="#" underline="none">
                                            consultation
                                        </Link>
                                        <Link fontSize="8pt" href="#" underline="none">
                                            facial
                                        </Link>
                                        <Link fontSize="16.4pt" href="#" underline="none">
                                            product
                                            <br />
                                        </Link>
                                        <Link fontSize="8pt" href="#" underline="none">
                                            skincare
                                        </Link>
                                        <Link fontSize="16.4pt" href="#" underline="none">
                                            treatments
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="block-1">
                            <Box className="list-comment">
                                <Box>
                                    <Typography sx={{ marginBottom: '17px' }} variant="h4">
                                        Latest Comment
                                    </Typography>
                                    <Box className="">
                                        <Link
                                            sx={{ fontWeight: 'bold', fontSize: '16px', paddingRight: '4px' }}
                                            href="#"
                                            underline="none"
                                        >
                                            A WordPress
                                        </Link>
                                        on
                                        <Link
                                            sx={{ fontWeight: 'bold', fontSize: '16px', paddingLeft: '4px' }}
                                            href="#"
                                            underline="none"
                                        >
                                            Commenter Don’t be afraid to start your beauty treatment
                                        </Link>
                                        <Typography fontSize="0.71111em">November 21, 2021</Typography>
                                        <Typography sx={{ marginTop: '5px', marginBottom: '20px' }}>
                                            Hi, this is a comment. To get started with moderating, editing, and deleting
                                            comments, please visit the Comments screen in…
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default MainContent;
