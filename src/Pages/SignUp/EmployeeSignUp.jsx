import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, createTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const defaultTheme = createTheme();

const EmployeeSignUp = () => {
    const {createUser,updateUserProfile,googleLogin} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    


      //google login
      const  handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
          console.log(result.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account created",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        })
        .catch(error=> console.log(error))

      }


    const handleEmployeeSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    const dob = form.dob.value;
    console.log(name,email,password,dob,image);



    //signup
    createUser(email,password)
    .then(result=>{
        console.log(result.user);
        updateUserProfile(name,image)
        .then(()=>{
          console.log('employee profile info updated');
          const employeeInfo = {
          name,
          email: email,
          dob,
          image,
          }
        axiosSecure.post('/employees', employeeInfo)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Account created",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/dashboard/employeeHome')
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
          Employee Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleEmployeeSignUp}
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
            autoComplete="Full Name"
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

export default EmployeeSignUp;
