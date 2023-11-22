import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ChangeUsernameModal from '../changeUsernameModal';
import manageIcon from "../../../assets/svgs/manage-icon.svg";
import ManageSubscriptionModal from '../manageSubscriptionModal';
import { MdArrowForwardIos } from "react-icons/md";

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
            <Button onClick={handleOpen} style={manageBtnStyle}><img src={manageIcon} /> Manage</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 300, border: 'none', borderRadius: '5px' }}>
                    <div style={modalHeader}>
                        {/* <img src={manageIcon} style={{ marginTop: '-30px' }} /> */}
                        {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/geography.png" alt="geography" style={{ marginTop: '-40px' }}/> */}
                        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/europe.png" alt="europe" style={{ marginTop: '-60px' }} />
                        <div style={{padding:"10px 0"}}>
                            <p style={{ margin: '0px' ,color:'#676767',fontWeight:'600'}}>indigenousenterprise</p>
                            <h2 id="child-modal-title" style={manageAccountHeading}>Manage account</h2>
                        </div>
                    </div>
                    <p id="child-modal-description" style={changeUsernameModalWrapper}>
                        <ChangeUsernameModal /><MdArrowForwardIos style={{ marginRight: '5px' }} />
                    </p>
                    <p id="child-modal-description" style={manageSubscriptionModalWrapper}>
                        <ManageSubscriptionModal /><MdArrowForwardIos style={{ marginRight: '5px' }} />
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

const manageBtnStyle = {
    border: "1px solid black",
    borderRadius: "30px",
    padding: '10px 30px',
    gap: "5px",
    textTransform: "none",
    color: "#122250",
    fontWeight: "bold"
}

const manageAccountHeading = { margin: '0px',fontSize:"22px" }

const changeUsernameModalWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #D4D9E4',
    borderRadius: '20px',
    padding: '3px',
    backgroundColor: '#F7F9FF'
}

const manageSubscriptionModalWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #D4D9E4',
    borderRadius: '20px',
    padding: '3px',
    backgroundColor: '#F7F9FF'
}
export default ManageAccountModal;