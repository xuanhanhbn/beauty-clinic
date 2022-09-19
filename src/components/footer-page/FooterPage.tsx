import { Box, List, ListItemText, ListItem, ListItemButton, Typography, ListItemIcon } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import footerLogo from 'assets/images/home/FooterLogo.png';
import './footer-page.css';

const FooterPage = () => {
    return (
        <Box component="section" overflow="hidden" className="bg-ft">
            <Box maxWidth={'1152px'} margin="0 auto" pt={31}>
                <Box className="footer-container" gap={2}>
                    <Box>
                        <Box mb={2.5}>
                            <img src={footerLogo} alt="FooterLogo" />
                        </Box>
                        <Box mb={2.5}>
                            <Typography>Beautice is a Beauty Clinic WordPress Theme.</Typography>
                        </Box>
                        <Typography>Baker Steet 101, NY, United States.</Typography>
                        <List className="df_flex">
                            <ListItemText>+521 569 8966.</ListItemText>
                            <ListItemText>mail@company.com.</ListItemText>
                        </List>
                        <Box className="spacer"></Box>
                    </Box>
                    <Box className="list-page_footer">
                        <Box>
                            <Box pl = {2.3}>Pages</Box>
                            <List>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Home</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>About</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Service</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Gallery</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Team</ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Box pl={2.3}>Informations</Box>
                            <List>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Terms & conditions</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Privacy policy</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Blog</ListItemButton>
                                </ListItem>
                                <ListItem className="list-pages">
                                    <ArrowRightIcon />
                                    <ListItemButton>Contact</ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
                <Box className="df_flex list-icons_footer" pb={14}>
                    <Box>
                        <List className="icons_list">
                            <ListItemIcon className='icons-section'>
                                <ListItemButton >
                                    <FacebookIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <TwitterIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <LinkedInIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <YouTubeIcon fontSize="large" />
                                </ListItemButton>
                                <ListItemButton>
                                    <InstagramIcon fontSize="large" />
                                </ListItemButton>
                            </ListItemIcon>
                        </List>
                    </Box>
                    <Box>
                        <Typography>© AltDesain Studio 2021 – All right reserved.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterPage;
