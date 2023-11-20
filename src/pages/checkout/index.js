import React from 'react';
import '../../styles/checkout.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Header from '../../components/header';
import PagesHeader from '../../components/pages_header';
import { MdCancel } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import visa from "../../assets/svgs/visa.svg";
import mastercard from "../../assets/svgs/mastercard.svg";
import amex from "../../assets/svgs/amex.svg";
import discover from "../../assets/svgs/discover.svg";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaPenFancy } from "react-icons/fa";

function Checkout() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Header />
            <PagesHeader />

            <div className='checkout'>
                <div className='checkout-container'>
                    <div className='checkout-left-section'>
                        <div className='checkout-left-section-header'>
                            <h1 style={{ margin: "0px", textAlign: "left" }}>Secure checkout</h1>
                            <div className='checkout-left-section-header-icons'>
                                <AiOutlineDollar />
                                <p>30 day money back guarantee</p>
                            </div>
                            <div className='checkout-left-section-header-icons'>
                                <MdCancel />
                                <p>Cancel anytime</p>
                            </div>
                        </div>

                        <div className='checkout-body'>
                            <div className='payment-types'>
                                <p>Pay with credit / debit card</p>
                                <div style={{ display: 'flex', gap: '3px' }}>
                                    <img src={visa} />
                                    <img src={mastercard} />
                                    <img src={discover} />
                                    <img src={amex} />
                                </div>
                            </div>

                            <div className='cardholder-details'>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        size="medium"
                                        required
                                        id="cardHolderName"
                                        label="Cardholder name"
                                        fullWidth
                                        autoComplete="cc-name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                    size="medium"
                                        required
                                        id="cardNumber"
                                        label="Card number"
                                        fullWidth
                                        autoComplete="cc-number"
                                        variant="outlined"
                                    />
                                </Grid>

                                <div style={{ display: 'flex', gap: '1rem', padding: "1rem 0" }}>

                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">CVV/CVC</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </div>
                            </div>

                            <p style={{ textAlign: "left" }}>Billing address</p>
                            <div className='billing-address'>

                                <Box sx={{ maxWidth: 100 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Grid item xs={12}>
                                    <TextField
                                        size="medium"
                                        required
                                        id="streetaddress"
                                        name="streetaddress"
                                        label="Street address"
                                        fullWidth
                                        autoComplete="streetaddress"
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        size="medium"
                                        required
                                        id="streetaddress"
                                        name="streetaddress"
                                        label="Apartment, suite, etc. (optional)"
                                        fullWidth
                                        autoComplete="streetaddress"
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        size="medium"
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="city"
                                        variant="outlined"
                                    />
                                </Grid>

                                <div style={{ display: "flex", padding: "1rem 0", justifyContent: "space-between" }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            size="medium"
                                            required
                                            id="state"
                                            name="state"
                                            label="State"
                                            fullWidth
                                            autoComplete="state"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Zip code</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='checkout-right-section'>
                        <div className='checkout-right-section-header'>
                            <p style={{ fontWeight: "600" }}>Order summary</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <FaPenFancy />
                                <p>Change package</p>
                            </div>
                        </div>

                        <div className='credits-package'>
                            <p>Credits package</p>
                            <p>2,500 credits</p>
                        </div>

                        <div className='price'>
                            <p>Price</p>
                            <p>$10.00</p>
                        </div>

                        <div className='total'>
                            <p>Total</p>
                            <p>$10.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;