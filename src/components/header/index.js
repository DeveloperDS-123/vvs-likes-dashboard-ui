import React from 'react';
import brandLogo from "../../assets/images/brand-logo.png";

function Header() {
    return (
        <>
            <div style={headerStyle}>
                <img src={brandLogo} alt="brandLogo" style={headerLogo} />
                <h5>AUTOMATICVIRAL</h5>
            </div>

        </>
    );
}

// Styles
const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3964E7',
    height: '50px',
    textAlign: 'center',
    color: '#FFF',
    justifyContent: 'center'
}

const headerLogo = {
    height: '60px',
    width: '60px'
}

export default Header;