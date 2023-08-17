import React from 'react';
import { Box, Typography } from '@mui/material';
import Data from './data.json';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <Box sx={{ width: '80%', textAlign: 'center', mx: 'auto', border: '1px dashed grey', pb: 2, pt: 5, marginTop: '100px' }}>
            <Typography variant="h2" sx={{ fontFamily: 'Cinzel Decorative, serif', color: '#333', textAlign: 'center', pt: 6}}>
                Truck Models
            </Typography>
        
                <Typography variant="h1" sx={{ fontFamily: 'Cinzel Decorative, serif', letterSpacing: 2, color: '#a81c1c', textAlign: 'center', width: '100%' }}>
                    {truck.model}
                </Typography>
                <Typography sx={{ fontFamily: 'Cinzel Decorative, serif', letterSpacing: 2, color: 'Blue', textAlign: 'center', width: '100%', pb: 1 }}>
                    {truck.tagline}
                </Typography>
                <Typography sx={{ fontFamily: 'Cinzel Decorative, serif', letterSpacing: 2, textAlign: 'center', width: '100%' }}>
                    {truck.blurb}
                </Typography>
                <Button sx={{ backgroundColor: '#a81c1c', color: 'white', marginTop: '20px' }}>
                    Click here
                </Button>
            </Box>
    )
}
export default Home