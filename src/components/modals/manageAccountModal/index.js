import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChangeUsernameModal from '../changeUsernameModal';
import ManageSubscriptionModal from '../manageSubscriptionModal';

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


function ManageAccountModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Manage</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <div style={modalHeader}>
                    <p>indigenousenterprise</p>
                    <h2 id="child-modal-title">Manage account</h2>
                    </div>
                    <p id="child-modal-description">
                        <ChangeUsernameModal />
                    </p>
                    <p id="child-modal-description" >
                        <ManageSubscriptionModal />
                    </p>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

// Styles
const modalHeader = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '-10px'
}

const modalsWrapper = {
    border: '1px solid black',
    borderRadius: '10px'
}
export default ManageAccountModal;