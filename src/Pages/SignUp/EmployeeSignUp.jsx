import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
const defaultTheme = createTheme();

const EmployeeSignUp = () => {
    const handleEmployeeSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const dob = form.dob.value;
    console.log(name,email,password,dob);
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

export default EmployeeSignUp;
