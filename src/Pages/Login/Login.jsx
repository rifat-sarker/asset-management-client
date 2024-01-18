import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, createTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

const Login = () => {
    const {login,googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();



     //google login
     const  handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
          console.log(result.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account login successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        })
        .catch(error=> console.log(error))

      }


 const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    // login
    login(email,password)
    .then(result=>{
        console.log(result.user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully login",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
    })
    .catch(error=>{
        console.log(error);
    })
 }
    
    return (
        <div className="pt-20">
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 1 }}
            >
             
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
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <p>
                    Dont have an account? <Link href="/employee">Sign Up</Link>
                  </p>
                  <Button onClick={handleGoogleLogin} variant="contained" sx={{my:2}} >Google</Button>
                </Grid>
              </Grid>
              <br />
            </Box>
          </Box>
        </Container>
        </ThemeProvider>
        </div>
    );
};

export default Login;