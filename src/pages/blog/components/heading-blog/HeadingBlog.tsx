import { Box, Typography, Grid } from '@mui/material';

import './heading-blog.css';
function HeadingBlog() {
    return (
        <>
            <Box component="section">
                <Box>
                    <Box className="background_blog">
                        <Box className="background_blog-overlay"></Box>
                    </Box>
                    <Box textAlign="center" className="background-title">
                        <Typography variant="h3">Beautice Beauty Clinic</Typography>
                    </Box>
                </Box>
            </Box>
            <Box pt={50}></Box>
        </>
    );
}

export default HeadingBlog;
