import { Avatar, Box, Button, Container, CssBaseline, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography, createTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
const defaultTheme = createTheme();

const AdminSignUp = () => {
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const [packages, setpackages] = useState('');
    const navigate = useNavigate();
    const axiosSecure= useAxiosSecure();

    const handleChange = (event) => {
        setpackages(event.target.value);
      };
    const handleAdminSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        const dob = form.dob.value;
        const company = form.company.value; 
        const logo = form.logo.value; 
        console.log(email,password,logo,name,company,packages,dob);


         //signup
     createUser(email,password)
    .then(result=>{
        console.log(result.user);
        updateUserProfile(name,image)
        .then(()=>{
          const adminInfo = {
            name,
            email: email,
            dob,
            image,
            logo,
            packages,
            // role:'admin'
            }

          axiosSecure.post('/admin', adminInfo)
          .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Admin created",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/adminHome')
            }
          })
        })
       

    })
    .catch(error=>{
        console.log(error);
    })


  }
  return (
    <div className="pt-20">
      <Helmet>
        <title>Asset Management System | Join as Admin</title>
      </Helmet>
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
              Admin Register
            </Typography>
            <Box
              component="form"
              onSubmit={handleAdminSignUp}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="Name"
                autoFocus
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="image"
                label="Image URL"
                name="image"
                autoComplete="Image URL"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="company"
                label="Company Name"
                name="company"
                autoComplete="Name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="logo"
                label="Company logo"
                name="logo"
                autoComplete="Name"
                autoFocus
              />
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                label="Date of Birth"
                type="date"
                id="dob"
                autoComplete="date"
              />
              <InputLabel id="demo-simple-select-label">Select a Package</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={packages}
                    label="Select a Package"
                    onChange={handleChange}
                    >
                    <MenuItem value={'5for5'}>5 Members for $5</MenuItem>
                    <MenuItem value={'10for8'}>10 Members for $8</MenuItem>
                    <MenuItem value={'20for15'}>20 Members for $15</MenuItem>
                </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <p>
                    Already have an account? <Link href="/login">Login</Link>
                  </p>
                </Grid>
              </Grid>
              <br />
            </Box>
            {/* {registerError && <p className="text-red-500">{registerError}</p>} */}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AdminSignUp;
