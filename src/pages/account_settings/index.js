import React from 'react';
import '../../styles/account_settings.css';
import Header from '../../components/header';
import PagesHeader from '../../components/pages_header';


function AccountSettings() {
    return (
        <>
            <Header />
            <PagesHeader />
            <div className='account-settings'>
                <div className='account-settings-table'>
                    <h2>Account settings</h2>

                    <div className='account-settings-table-row1'>
                        <label for="account_email">Account email</label><br />
                        <input type="text" name="account_email" value="cef400@gmail.com" /><br />
                        <button>Save email</button>
                    </div>
                    <div className='account-settings-table-row2'>
                        <label for="change_password">Change password</label><br />
                        <input type="text" name="current_password" placeholder='Current password' />
                        <input type="text" name="new_password" placeholder='New password' />
                        <input type="text" name="confirm_password" placeholder='Confirm new password' />
                        <button>Save password</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default AccountSettings;