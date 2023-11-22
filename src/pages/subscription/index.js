import React,{useState} from 'react';
import '../../styles/subscription.css';
import Button from '@mui/material/Button';
import PagesHeader from "../../components/pages_header";
import Header from '../../components/header';
import subscriptionTableData from '../../assets/data/subscriptionTableData';
import manageIcon from "../../assets/svgs/manage-icon.svg";
import ManageAccountModal from '../../components/modals/manageAccountModal';


function Subscription() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Header />
            <PagesHeader />

            <div className='subscription-container'>
                <div className='subscription-table'>
                    <div className='subscription-table-header'>
                        <h2 style={{ marginTop: "0px" }}>Subscriptions</h2>
                        <button className='subscription-btn'>
                            <span>+  Add account</span>
                        </button>
                    </div>

                    <div className='subscription-table-body'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Instagram Username</th>
                                    <th>Subscription </th>
                                    <th>Next Billing Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscriptionTableData.map((item, index) => {
                                    return <tr key={index}>
                                        <td><div className='user'><img src={item.image} className='subscriptionTableImage' /><p>{item.igUsername}</p></div></td>

                                        <td><p className='subscriptionLikes'>{item.subscription[0].subscriptionLikes}</p><p className='subscriptionPrice'>{item.subscription[1].subscriptionPrice}</p></td>

                                        <td><p className='nextbillingdate'>{item.nextBillingDate}</p></td>

                                        {/* <td><button className='manageBtn' onClick={() => console.log("manageBtn")}><img src={manageIcon} />{item.manageBtn}</button></td> */}
                                        <td><ManageAccountModal  onClick={handleOpen}  open={open} onClose={handleClose} /></td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;