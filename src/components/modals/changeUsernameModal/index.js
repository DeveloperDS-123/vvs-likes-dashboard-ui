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
            <Button onClick={handleOpen} sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}>Change username</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 300, border: 'none', borderRadius: '5px' }}>
                    <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/europe.png" alt="europe" style={{ marginTop: '-60px' ,marginLeft: '100px'}} />

                    <div style={changeUsernameModalWrapper}>
                        <p style={{ margin: '0px', color: '#676767', fontWeight: '600' }}>indigenousenterprise</p>
                        <h2 id="child-modal-title" style={changeUsernameHeading}>Change username</h2>
                        <p id="child-modal-description" className='test_demo' style={heading3}>
                            You may only change your instagram username once every 48 hours.
                        </p>
                    </div>

                    <div style={changeUsernameModalFooter}>
                        <input type="text" placeholder="@" style={{padding: '10px',borderRadius:'5px',border:"1px solid #DCD5DE"}} />
                        <Button style={saveBtn} onClick={handleClose}>Save</Button>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

// Styles
const saveBtn = {
    backgroundColor: "#1ED65A",
    color: '#FFF',
    borderRadius: '20px'
}

const changeUsernameHeading = {
    margin: '0px', fontSize: "22px"
}

const changeUsernameModalWrapper = {
    padding: '10px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
}

const heading3 = {
    padding: '5px',
    margin: '0px',
    fontSize: '15px',
    color: '#676767',
    fontWeight: '500'
}

const changeUsernameModalFooter = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '10px 0'
}
export default ChangeUsernameModal;