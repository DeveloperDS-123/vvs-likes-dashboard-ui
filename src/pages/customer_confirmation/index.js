import React from 'react';
import Header from "../../components/header";
import "../../styles/customer_confirmation.css";
import { useNavigate } from 'react-router-dom';

function CustomerConfirmation() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Header />
                <div className='customer-confirmation'>
                    <h5>We're no longer accepting new customers.</h5>
                    <button className='login-btn' onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </>
    );
}

export default CustomerConfirmation;