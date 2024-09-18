import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';

function CandidatePayDetails() {
  const navigate = useNavigate();

  const SubmitVerification = () => {
    navigate('/SlotBooking');
  };

  return (
    <>
      <CustomNavbar />
      <Box
        className="d-flex align-items-center"
        sx={{
          marginLeft: { xs: '16px', sm: '32px', md: '64px' },
          marginTop: '24px',
        }}
      >
        <Link to="/PaymentForm" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          marginLeft: { xs: '16px', sm: '32px', md: '64px' },
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
          borderRadius: '15px',
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
          borderLeft: '15px solid #4A2B3A',
        }}
      >
        <CardContent sx={{ marginTop: '24px', paddingX: { xs: 2, sm: 4 } }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Employee ID/KGID NO/Phone Number
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                21798319
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                First Name
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Sharan
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Date Of Birth
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                1976-03-03
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                KGID
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                21798319
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Designation
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                CTR
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Address
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Gyrahalli, Mathagadur Post
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Phone Number
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                9535268563
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                Email
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                sharan@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: { xs: '95%', sm: '90%', md: '85%' },
          height: 200,
          margin: '0 auto',
          marginTop: '40px',
          borderRadius: '15px',
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#4A2B3A',
            width: '100%',
            height: '45px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
          }}
        >
          <Typography variant="h6" sx={{ textAlign: 'left', width: '100%' }}>
            PAYMENT DETAILS
          </Typography>
        </Box>
        <CardContent sx={{ textAlign: 'center', marginTop: '40px', color: 'red' }}>
          <Typography variant="h6">First Time Payment Is Exempted</Typography>
        </CardContent>
      </Card>

      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '40px', marginBottom: '80px' }}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#4A2B3A', width: { xs: '150px', sm: '180px', md: '200px' }, height: '50px' }}
            onClick={SubmitVerification}
          >
            NEXT
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{ width: { xs: '150px', sm: '180px', md: '200px' }, height: '50px' }}
          >
            RESET
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CandidatePayDetails;
