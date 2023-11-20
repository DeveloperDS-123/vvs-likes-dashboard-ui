import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { FiLogOut } from 'react-icons/fi';


function PagesHeader() {
    return (
        <>
            <div style={navbarStyle}>
                {/* 1st Section - Tabs */}
                <div style={tabsContainerStyle}>
                    <Link to="/accountsettings" style={tabStyle}>
                        Account Settings
                    </Link>
                    <Link to="/billing" style={tabStyle}>
                        Billing
                    </Link>
                    <Link to="/subscription" style={tabStyle}>
                        Subscriptions
                    </Link>
                </div>

                {/* 2nd Section - Logout */}
                <div style={logoutContainerStyle}>
                    <Link to="/logout" style={logoutStyle}>
                        <FiLogOut style={logoutIconStyle} /> Log out 
                    </Link>
                </div>
            </div>
        </>
    );
}


// Styles
const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F3F3F3', // Background color of navbar
    color: '#000', // Text color of navbar
    padding: '15px 20px',
    borderBottom: '2px solid #E4E5E7'
};

const tabsContainerStyle = {
    display: 'flex',
};

const tabStyle = {
    marginRight: '20px',
    textDecoration: 'none',
    color: '#000', // Text color of tabs
    fontWeight: '600', // Font weight of tabs
};

const logoutContainerStyle = {
    display: 'flex',
    alignItems: 'center',
};

const logoutStyle = {
    textDecoration: 'none',
    color: '#000', // Text color of logout link
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600'
};

const logoutIconStyle = {
    marginLeft: '5px',
};

const activePageStyle = {
    color: "#3964E7",
    height: "2px",
    width: "100%",
}


export default PagesHeader;