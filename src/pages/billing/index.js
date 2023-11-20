import React from 'react';
import Header from '../../components/header';
import PagesHeader from '../../components/pages_header';
import '../../styles/billing.css';

function Billing() {
    return (
        <>
            <Header/>
            <PagesHeader/>
            <div className='billing'>
                <div className='billing-table'>
                    <h2>Billing</h2>
                    <div className='billing-row'>
                        <p>payment method</p>
                        <p>cardholder name</p>
                        <p>expires</p>
                    </div>

                    <h2>Transaction history</h2>
                    <div className='transaction-history-row'>
                        <p>date</p>
                        <p>username</p>
                        <p>description</p>
                        <p>payment method</p>
                        <p>total</p>
                    </div>

                    <div className='no-transaction'>
                        <p>No transaction found</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Billing;