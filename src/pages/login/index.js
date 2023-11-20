import React from 'react';
import '../../styles/login.css';
import Avatar from '@mui/material/Avatar';
import Header from "../../components/header";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();


function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <>
            <Header/>

            <div className='login-container'>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar> */}
                            <Typography component="h1" variant="h5" style={{ fontWeight: "800" }}>
                                Log in to your dashboard
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <Grid container>

                                    <Grid item>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Keep me signed in"
                                        />
                                    </Grid>

                                    <Grid item xs  sx={{ mt: 1}}>
                                        <Link href="#" variant="body2" style={{ textDecoration: "none" ,fontWeight: "700" }}>
                                            Forgot password?
                                        </Link>
                                    </Grid>

                                </Grid>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ backgroundColor: "#1ED65A" }}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Log in
                                </Button>

                                {/* <Grid container>

                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>

                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>

                                </Grid> */}


                            </Box>
                        </Box>
                       
                    </Container>
                </ThemeProvider>
            </div>
        </>
    );
}

export default Login;