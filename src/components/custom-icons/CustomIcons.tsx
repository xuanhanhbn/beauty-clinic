import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './custom-icons.css';

const useStyles = makeStyles((theme: any) => ({
    responseIcon: {
        [theme.breakpoints.down('md')]: {
            marginLeft: '10px !important',
            marginRight: '10px !important',
        },
    },
}));

function CustomIcons() {
    const classes = useStyles();

    return (
        <Box textAlign="center">
            <List className="list-icons_professional" component="ul">
                <ListItem className={`icons_professional icons_professional-fb ${classes.responseIcon}`}>
                    <FacebookRoundedIcon />
                </ListItem>
                <ListItem className={`icons_professional icons_professional-tw ${classes.responseIcon}`}>
                    <TwitterIcon />
                </ListItem>
                <ListItem className={`icons_professional icons_professional-ins ${classes.responseIcon}`}>
                    <InstagramIcon />
                </ListItem>
            </List>
        </Box>
    );
}

export default CustomIcons;
