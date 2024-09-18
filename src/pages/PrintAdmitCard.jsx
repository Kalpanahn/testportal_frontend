import React, { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Success from '../images/SuccessIcon.png';
import { Card, CardContent, CardActions, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Grid } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';

function PrintAdmitCard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <>
      <CustomNavbar />
      <Box
        className="d-flex align-items-center"
        sx={{ marginLeft: { xs: '10px', sm: '20px', md: '50px' }, marginTop: '20px' }}
      >
        <Link to="/DownloadAdmitCard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
            <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
          </Box>
        </Link>
      </Box>

      {/* Main Content Section */}
      <Grid container justifyContent="center" sx={{ marginTop: { xs: '20px', md: '50px' } }}>
        <Card
          sx={{
            width: { xs: '90%', sm: '70%', md: '40%' }, // Responsive widths for different screen sizes
            height: { xs: 'auto', md: 'auto' }, // auto height of card
            margin: '0 auto',
            padding: { xs: '20px', md: '40px' }, // Padding for different screen sizes
            textAlign: 'center'
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div" fontWeight="bold" mt={3}>
              PRINT ADMIT CARD
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', marginTop: '20px' }}>
            <Button
              variant="contained"
              sx={{
                background: '#4A2B3A',
                width: '150px',
                height: '40px',
                '&:hover': {
                  backgroundColor: '#5e3c48'
                }
              }}
              onClick={handleClickOpen}
            >
              PRINT
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Modal Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ backdropFilter: 'blur(5px)' }}
      >
        <DialogTitle id="alert-dialog-title" textAlign="center">
          <img src={Success} alt="" style={{ marginBottom: '10px', width: '100px' }} />
        </DialogTitle>
        <DialogContent>
          <Typography
            id="alert-dialog-description"
            variant="body1"
            component="div"
            sx={{ fontWeight: 'bold', whiteSpace: 'pre-line', textAlign: 'center' }}
          >
            Your admit card has been downloaded successfully.
            To start your test use the credentials sent to your registered email or mail.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            sx={{
              background: '#4A2B3A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#5e3c48'
              }
            }}
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PrintAdmitCard;
