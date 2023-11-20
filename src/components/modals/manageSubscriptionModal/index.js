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
            <Button onClick={handleOpen}>Manage subscription</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <p>indigenousenterprise</p>
                    <h2 id="child-modal-title">Manage subscription</h2>
                    <p id="child-modal-description">
                        After the subscription plan is changed, the changes to likes being sent are instant. You will be billed for a new subscription plan.
                    </p>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">1000 likes & views / post <strong>CURRENT PLAN</strong></InputLabel>
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
                    <Button style={nextBtnStyle} onClick={handleClose}>Next</Button>
                    <Button style={cancelSubscriptionBtn} onClick={handleClose}>Cancel subscription</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

//Styles
const nextBtnStyle = {
    backgroundColor: "#1ED65A",
    color: '#FFF'
}

const cancelSubscriptionBtn = {
    border: '1.5px solid red',
    borderRadius: "10px",
    color: 'red'
}

const priceStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #F3F3F3',
}

const billingDateStyle = {
    display: 'flex',
    justifyContent:'space-between'
}

export default ManageSubscriptionModal;