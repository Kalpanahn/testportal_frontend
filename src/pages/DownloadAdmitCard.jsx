import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Grid, Typography, Button, Box, Card, CardContent } from '@mui/material';
import CustomNavbar from '../components/CustomNavbar';
import { Link } from 'react-router-dom';

function DownloadAdmitCard() {
  return (
    <>
      <CustomNavbar />
      <Box
        className='d-flex align-items-center'
        sx={{
          marginLeft: { xs: '16px', sm: '24px', md: '32px', lg: '40px' },
          marginTop: '24px',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
          </Box>
        </Link>
      </Box>

      <Typography
        variant="h6"
        sx={{
          marginTop: '24px',
          marginLeft: { xs: '16px', sm: '24px', md: '32px', lg: '40px' },
          marginBottom: '16px',
          fontWeight: 'bold',
        }}
      >
        CANDIDATE DETAILS
      </Typography>

      <Card
        sx={{
          width: { xs: '95%', sm: '90%', md: '85%' },
          margin: '0 auto',
          borderRadius: '12px',
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <CardContent sx={{ padding: { xs: 2, sm: 3 } }}>
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button
              variant="contained"
              href='/PrintAdmitCard'
              color="secondary"
              sx={{ backgroundColor: '#4a004a' }}
            >
              Download Admit Card
            </Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Employee ID/KGID NO/Phone Number</Typography>
              <Typography variant="body1" fontWeight="bold">21798319</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>First Name</Typography>
              <Typography variant="body1" fontWeight="bold">Sharan</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Date Of Birth</Typography>
              <Typography variant="body1" fontWeight="bold">1976-03-03</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>KGID</Typography>
              <Typography variant="body1" fontWeight="bold">21798319</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Designation</Typography>
              <Typography variant="body1" fontWeight="bold">CTR</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Address</Typography>
              <Typography variant="body1" fontWeight="bold">Gyrahalli, Mathagadur Post</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Phone Number</Typography>
              <Typography variant="body1" fontWeight="bold">9535268563</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Email</Typography>
              <Typography variant="body1" fontWeight="bold">sharan@gmail.com</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default DownloadAdmitCard;
