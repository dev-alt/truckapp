import React from 'react';
import { Box, Typography } from '@mui/material';
import Data from './data.json';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <Box>
            <Typography variant="h2" sx={{ fontFamily: 'Cinzel Decorative, serif', color: '#333', textAlign: 'center', pt: 6}}>
                Truck Models
            </Typography>
        </Box>
        
    )
}
export default Home