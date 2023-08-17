import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Truck({ truck }) {
    return (
        <Box sx={{ width: '80%', textAlign: 'center', mx: 'auto', border: '1px dashed grey', pb: 2, pt: 5, marginTop: '100px' }}>
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

export default Truck;
