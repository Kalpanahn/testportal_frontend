import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, TextField, FormControlLabel, RadioGroup, Radio, Button, InputAdornment, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';
import UploadIcon from '@mui/icons-material/Upload';

function CandidateUpdateDetails() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/PreferedExamLocation');
    };
    return (
        <>
            <CustomNavbar />
            <Box
                className='d-flex align-items-center'
                sx={{ marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginTop: '30px' }}
            >
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box display="flex" alignItems="center">
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
                        <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
                    </Box>
                </Link>
            </Box>

            <Typography variant="h6" sx={{ marginTop: '30px', marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginBottom: '10px',fontWeight:'bold' }}>
                FILL IN THE REMAINING DETAILS
            </Typography>

            <Card sx={{ width: '90%', height: 'auto', margin: '0 auto', borderRadius: '15px', boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`, borderLeft: '15px solid #4A2B3A' }}>
                <CardContent sx={{ marginTop: '30px' }}>
                    <Grid container spacing={5} rowSpacing={3}>
                        <Grid container item xs={12} spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="subtitle2">Employee ID/KGID NO/Phone Number</Typography>
                                <Typography variant="body1" fontWeight="bold">21798319</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="subtitle2">KGID</Typography>
                                <Typography variant="body1" fontWeight="bold">21798319</Typography>
                            </Grid>
                        </Grid>

                        {/* Other Fields */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">First Name</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Please Enter First Name'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Middle Name</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Please Enter Middle Name'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Last Name</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Please Enter Last Name'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Date Of Birth</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Enter'
                                type='date'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Date Of Joining</Typography>
                            <TextField
                                type='date'
                                fullWidth
                                size="small"
                                placeholder='Enter'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Designation</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Please Enter Designation'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Experience</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder='Please Enter Experience'
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">District</Typography>
                            <TextField
                                select
                                fullWidth
                                variant="outlined"
                                defaultValue=""
                                label="Please Select Destrict"
                                InputProps={{ style: { fontWeight: 'bold' } }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: 40,
                                    }
                                }}>
                                <MenuItem value="disability1">Disability 1</MenuItem>
                                <MenuItem value="disability2">Disability 2</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Address</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder="Please Enter Address"
                                multiline
                                rows={4}
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Address1</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                placeholder="Please Enter Address"
                                multiline
                                rows={4}
                                InputProps={{ style: { fontWeight: 'bold' } }}
                            />
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>

            <Typography variant="h6" sx={{ marginTop: '50px', marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginBottom: '10px',fontWeight:'bold' }}>
                DESABILITY DETAILS
            </Typography>
            <Card sx={{ width: '90%', height: 'auto', margin: '10px auto', borderRadius: '15px', boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`, borderLeft: '15px solid #4A2B3A' }}>
                <CardContent>
                    <Grid container spacing={2} sx={{ marginTop: '5px' }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Are you physically challenged?</Typography>
                            <RadioGroup row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Type of Disability</Typography>
                            <TextField
                                select
                                fullWidth
                                variant="outlined"
                                label="Type of Disability"
                                InputProps={{ style: { fontWeight: 'bold' } }}
                                defaultValue=""
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: 40,
                                    }
                                }}
                            >
                                <MenuItem value="disability1">Disability 1</MenuItem>
                                <MenuItem value="disability2">Disability 2</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Percentage of Disability</Typography>
                            <TextField
                                fullWidth
                                InputProps={{ style: { fontWeight: 'bold' } }}
                                variant="outlined"
                                label="Percentage of Disability"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: 40,
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle2">Upload Related Document</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                type="file"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <UploadIcon sx={{ color: '#4A2B3A' }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{ accept: ".pdf, .doc, .docx, .txt" }}
                            />
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>

            <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '50px', marginBottom: '100px' }}>
                <Grid item>
                    <Button variant="contained" sx={{ backgroundColor: '#4A2B3A' }} onClick={handleSubmit}>
                        Save & Continue
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="#4A2B3A">
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default CandidateUpdateDetails;
