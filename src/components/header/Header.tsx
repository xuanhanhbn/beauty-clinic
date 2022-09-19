import { useState } from 'react';
import { Box, BoxProps, Grid } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Drawer, IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './header.css';
import logo from 'assets/images/logo/beauties-logo.png';
import CustomButton from 'components/CustomButton/CustomButton';
import CustomLink from '../CustomLink/CustomLink';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: any) => ({
    handleHeader: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    handleIcon: {
        [theme.breakpoints.down('md')]: {
            display: 'block !important',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none !important',
        },
    },
    responseDrawer: {
        [theme.breakpoints.up('md')]: {
            display: 'none !important',
        },
    },
    displayButtonMobile: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important',
        },
    },
    displayNoneButtonMobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none !important',
        },
        [theme.breakpoints.down('md')]: {
            display: 'block !important',
        },
    },
    
}));

export interface SelectedRoute {
    path: string;
    label: string;
    active: boolean;
}

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                fontSize: '16px',
                fontWeight: '500',
                padding: '0px 23px',
                letterSpacing: '2px',
                ...sx,
            }}
            {...other}
        />
    );
}

const Header = () => {
    const history = useHistory();
    const classes = useStyles();
    const trigger = useScrollTrigger();
    const routeArr: SelectedRoute[] = [
        {
            path: '/',
            label: 'Home',
            active: true,
        },
        {
            path: '/about',
            label: 'About',
            active: false,
        },
        {
            path: '/service',
            label: 'Service',
            active: false,
        },
        {
            path: '/gallery',
            label: 'Gallery',
            active: false,
        },
        {
            path: '/blog',
            label: 'Blog',
            active: false,
        },
    ];
    const listItems = routeArr.map((route: SelectedRoute) => {
        return (
            <Item key={route.path}>
                <CustomLink to={route.path} label={route.label} activeOnlyWhenExact={route.active}></CustomLink>
            </Item>
        );
    });
    const [open, setOpen] = useState(false);
    const navigateToContact = () => {
        history.push("/contact")
    }
    return (
        <>
            <Box
                sx={{
                    padding: '40px',
                    top: '10px',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        marginTop: '25px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <img src={logo} alt="logo" />
                    </Box>
                    <Box
                        className={classes.handleHeader}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'flex-start',
                        }}
                    >
                        {listItems}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            className={classes.handleIcon}
                            // mr={5}
                            sx={{
                                display: 'none',
                            }}
                        >
                            <Drawer className={classes.responseDrawer} open={open} onClose={() => setOpen(false)}>
                                <List>
                                    <ListItemButton className="menu-list-items">
                                        <ListItemIcon className="list-menu">
                                            <img src={logo} alt=" logo" />
                                            <ListItemText className="items-menu"> {listItems} </ListItemText>
                                            <ListItemIcon className={classes.displayNoneButtonMobile}>
                                                <CustomButton variant="contained" color="secondary" onClick={navigateToContact}>
                                                              Contact
                                                </CustomButton>
                                            </ListItemIcon>
                                        </ListItemIcon>
                                    </ListItemButton>
                                </List>
                            </Drawer>
                            <IconButton sx={{ marginLeft: 'auto'}} onClick={() => setOpen(true)} className="font-size-icon-nav-mobile">
                                <MenuSharpIcon />
                            </IconButton>
                        </Box>
                        <Box  className={classes.displayButtonMobile} >
                        <CustomButton variant="contained" color="secondary" onClick={navigateToContact}>
                            Contact
                        </CustomButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Header;
