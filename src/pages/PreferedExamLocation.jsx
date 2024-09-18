import React, { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, TextField, MenuItem, Button, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';

function PreferedExamLocation() {
    const navigate = useNavigate();
    const SubmitPreferedExam = () => {
        navigate('/ContactVerification');
    };

    return (
        <>
            <CustomNavbar />
            <Box
                className='d-flex align-items-center'
                sx={{ marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginTop: '30px' }}
            >
                <Link to="/CandidateUpdateDetails" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box display="flex" alignItems="center">
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
                        <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
                    </Box>
                </Link>
            </Box>

            <Typography variant="h6" sx={{ marginTop: '30px', marginLeft: { xs: '30px', sm: '50px', md: '100px' }, marginBottom: '10px', fontWeight: 'bold' }}>
                PREFERED EXAM LOCATION/DATE
            </Typography>

            <Card sx={{ width: '90%', height: 'auto', margin: '0 auto', borderRadius: '15px', boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`, borderLeft: '15px solid #4A2B3A' }}>
                <CardContent style={{ marginTop: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body1" fontWeight="bold" fontSize={20}>Current Work Location</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                select
                                fullWidth
                                variant="outlined"
                                label="Select Work Location"
                                defaultValue=""
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-root': {
                                        height: 40,
                                    }
                                }}
                            >
                                <MenuItem value="Mangalore">Mangalore</MenuItem>
                                <MenuItem value="Bangalore">Bangalore</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    {[1, 2, 3].map((preference) => (
                        <Grid container spacing={2.3} alignItems="flex-start" marginTop={5} key={preference}>
                            <Grid item xs={12} sm={2}>
                                <Typography variant="body1" fontWeight="bold" fontSize={20}>Location Preference {preference}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography>Select District</Typography>
                                <TextField
                                    select
                                    fullWidth
                                    label="Select District"
                                    variant="outlined"
                                    defaultValue=""
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputBase-root': {
                                            height: 40,
                                        }
                                    }}
                                >
                                    <MenuItem value="mangalore">Mangalore</MenuItem>
                                    <MenuItem value="bangalore">Bangalore</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography>Select Exam Date</Typography>
                                <TextField
                                    type='date'
                                    fullWidth
                                    variant="outlined"
                                    defaultValue=""
                                    sx={{
                                        width: '100%',
                                        '& .MuiInputBase-root': {
                                            height: 40,
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography>Select Exam Time</Typography>
                                 <TextField
                                    select
                                    fullWidth
                                    label="Select Time"
                                    variant="outlined"
                                    defaultValue=""
                                    sx={{
                                        width: '80%',
                                        '& .MuiInputBase-root': {
                                            height: 40,
                                        }
                                    }}
                                >
                                    <MenuItem value="mangalore">09AM-10AM</MenuItem>
                                    <MenuItem value="bangalore">10Am-11AM</MenuItem>
                                    <MenuItem value="bangalore">11Am-12PM</MenuItem>
                                    <MenuItem value="bangalore">12Pm-01PM</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    ))}
                </CardContent>
            </Card>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '50px', marginBottom: '100px' }}>
                <Grid item>
                    <Button variant="contained" style={{ background: '#4A2B3A', width: '200px', height: '40px' }} onClick={SubmitPreferedExam}>
                        Save & Continue
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" style={{ borderColor: '#4A2B3A', color: '#4A2B3A', width: '150px', height: '40px' }}>
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default PreferedExamLocation;
