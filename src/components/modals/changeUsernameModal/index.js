import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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


function ChangeUsernameModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Change username</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <p>indigenousenterprise</p>
                    <h2 id="child-modal-title">Change username</h2>
                    <p id="child-modal-description">
                        You may only change your instagram username once every 48 hours.
                    </p>
                    <input type="text" placeholder="@"/>
                    <Button style={saveBtn} onClick={handleClose}>Save</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

// Styles
const saveBtn = {
    backgroundColor:"#1ED65A",
    color: '#FFF'
}
export default ChangeUsernameModal;