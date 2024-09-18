import React, { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Success from '../images/SuccessIcon.png'
import { Card,Box, CardContent, CardActions, Typography, Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
 
function PrintExamResult() {
    const [open, setOpen] = useState(false);
 
    const handleClickOpen = () => {
        setOpen(true);
    };
 
    const handleClose = () => {
        setOpen(false);
    };
 
    return (
        <>
           
             <Box
                className='d-flex align-items-center'
                sx={{ marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginTop: '30px' }}
            >
                <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box display="flex" alignItems="center">
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
                        <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
                    </Box>
                </Link>
            </Box>
 
            <Card sx={{ width: '40%', height: 'auto', margin: '0 auto 50px auto' }}>
                <CardContent>
                    <Typography variant="h5" component="div" textAlign={'center'} mt={3} fontWeight={'bold'}>
                        PRINT EXAM RESULT
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        style={{ background: '#4A2B3A', width: '150px', height: '40px', textAlign: 'center' }}
                        onClick={handleClickOpen}
                    >
                        PRINT
                    </Button>
                </CardActions>
            </Card>
 
            {/* Modal Popup */}
            {/* <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    backdropFilter: 'blur(5px)',
                }}
            > */}
                {/* <DialogTitle id="alert-dialog-title" textAlign={'center'}>
                    <img src={Success} alt="" style={{ marginBottom: '10px', width: '100px' }} />
                </DialogTitle>
                <DialogContent>
                    <Typography
                        id="alert-dialog-description"
                        variant="body1"
                        component="div"
                        sx={{ fontWeight: 'bold', whiteSpace: 'pre-line',textAlign:'center' }}
                    >
                        Your admit card has been downloaded successfully.
                        To start your test use the credentials sent to your registered email or mail.
                    </Typography>
                </DialogContent>
 
                <DialogActions>
                    <Button onClick={handleClose} autoFocus variant="contained" style={{ background: '#4A2B3A', color: 'white' }}>
                        Okay
                    </Button>
                </DialogActions> */}
            {/* </Dialog> */}
           
        </>
    );
}
 
export default PrintExamResult;