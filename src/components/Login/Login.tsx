import * as React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputAdornment,
  IconButton,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //use navigate to navigate to new page
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    navigate("/marketplace");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: { xs: "95%", md: "90%" },
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" textAlign="center" mb={4}>
          Open Market Hub
        </Typography>
        <FormControl
          fullWidth
          margin="normal"
          sx={{
            my: 3,
          }}
        >
          <TextField
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
            InputLabelProps={{
              style: {
                color: "#FFF",
              },
            }}
            InputProps={{
              style: {
                color: "#FFF",
                border: "2px solid #FFF",
                borderRadius: "20px",
                fontSize: "1.5em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faUser} color="#FFF" size="1x" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            color: "white",
            my: 3,
          }}
        >
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{
              style: {
                color: "#FFF",
              },
            }}
            InputProps={{
              style: {
                color: "#FFF",
                border: "2px solid #FFF",
                borderRadius: "20px",
                fontSize: "1.5em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faLock} color="#FFF" size="1x" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="info"
            sx={{
              my: 5,
              borderRadius: "20px",
              fontSize: "25px",
            }}
          >
            Login
          </Button>
          <Typography variant="h6">
            Do not have account?
            <Link href="/create-new-account" color="inherit">
              Create New Account here
            </Link>
          </Typography>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
