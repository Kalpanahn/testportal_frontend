import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Success from '../images/SuccessIcon.png';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';

function SlotBooking() {
    return (
        <>
            <CustomNavbar />
            <Box
                className="d-flex align-items-center"
                sx={{
                    marginLeft: { xs: '16px', sm: '24px', md: '32px', lg: '40px' },
                    marginTop: '24px',
                }}>
                <Link to="/CandidatePayDetails" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box display="flex" alignItems="center">
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 16 }} />
                        <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
                    </Box>
                </Link>
            </Box>

            <Box p={3} sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
                <img src={Success} alt="Success" style={{ marginBottom: '10px', width: '100px' }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                    You have successfully booked your slot
                </Typography>
                <Typography variant="body2" gutterBottom fontWeight="bold">
                    Admit Card will be generated a day before your exam
                </Typography>
            </Box>

            <Card
                sx={{
                    width: { xs: '95%', sm: '90%', md: '85%' },
                    margin: '0 auto',
                    marginTop: '40px',
                    borderRadius: '12px',
                    boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
                }}>
                <Box
                    sx={{
                        backgroundColor: '#4A2B3A',
                        width: '100%',
                        height: '45px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '20px',
                    }}>
                    <Typography variant="h6" sx={{ textAlign: 'left', width: '100%' }}>
                        SLOT BOOKING
                    </Typography>
                </Box>

                <CardContent sx={{ marginTop: '20px', paddingX: { xs: 2, sm: 3 } }}>
                    <Box bgcolor="white" p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Registration Number
                                </Typography><b>123456789</b>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Name:
                                </Typography><b>Ramkumar</b>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Payment Mode
                                </Typography><b>Not Available</b>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box bgcolor="#f5f5f5" p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Email Id
                                </Typography><b>Ramkumar@gmail.com</b>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Phone Number
                                </Typography><b>9535268569</b>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box bgcolor="white" p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Date
                                </Typography><b>23-8-2000</b>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    City
                                </Typography><b>Bangalore</b>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    mt: 2,
                    mx: { xs: 2, md: 12 },
                    textAlign: { xs: 'center', md: 'left' },
                    fontWeight: 'bold',
                    marginBottom: '30px',
                }}>
                Note: No fee for the first attempt on the test
            </Typography>
        </>
    );
}

export default SlotBooking;
