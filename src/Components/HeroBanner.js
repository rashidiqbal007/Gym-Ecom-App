import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p='20px'>
            <Typography color='#ff2625' fontWeight='600px' fontSize='26px'>
                Fitness Club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="53px" mt="20px" >
                Sweat, Smile <br />
                and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='25px' mb={3}>
                Checkout the most effective Exercises
            </Typography>
            <Button variant="contained" color="error" href='#exercises'>
                Explore Exercises
            </Button>
            <Typography fontWeight={600} fontSize = "200px"color="#ff2625" sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="herobannerimage"
                className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner