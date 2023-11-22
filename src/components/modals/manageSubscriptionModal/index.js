import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ManageSubscriptionModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen} sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}>Manage subscription</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 300, border: 'none', borderRadius: '5px' }}>
                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/europe.png" alt="europe" style={{ marginTop: '-60px', marginLeft: '100px' }} />

                    <div style={ManageSubscriptionModalWrapper}>
                        <p style={{ margin: '0px', color: '#676767', fontWeight: '600' }}>indigenousenterprise</p>
                        <h2 id="child-modal-title" style={ManageSubscriptionHeading}>Manage subscription</h2>
                        <p id="child-modal-description">
                            After the subscription plan is changed, the changes to likes being sent are instant. You will be billed for a new subscription plan.
                        </p>
                    </div>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <div style={{display: 'flex', justifyContent:'space-between',margin:'10px'}}>
                                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/like--v1.png" alt="like--v1"/>
                                    <span>1000 likes & views / post <span style={{color:"blue", backgroundColor:'#EBEFFD'}}>CURRENT PLAN</span></span>
                                </div>
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <div style={priceStyle}>
                        <p>Price / mo</p>
                        <h3>$75.00</h3>
                    </div>

                    <div style={billingDateStyle}>
                        <p>Next billing date</p>
                        <h3>Dec 31, 1969</h3>
                    </div>

                    <div style={ManageSubscriptionModalFooter}>
                        <Button style={nextBtnStyle} onClick={handleClose}>Next</Button>
                        <Button style={cancelSubscriptionBtn} onClick={handleClose}>Cancel subscription</Button>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

//Styles
const nextBtnStyle = {
    backgroundColor: "#1ED65A",
    color: '#FFF',
    borderRadius: "20px",
}

const cancelSubscriptionBtn = {
    border: '1.5px solid red',
    borderRadius: "20px",
    color: 'red'
}

const priceStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #F3F3F3',
}

const billingDateStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const ManageSubscriptionModalWrapper = {
    padding: '10px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}

const ManageSubscriptionHeading = {
    margin: '0px', fontSize: "22px"
}

const ManageSubscriptionModalFooter = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '10px 0'
}

export default ManageSubscriptionModal;