import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FormLabel, Stack } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
const Contact = () => {
  //state variable
  const [open, setOpen] = React.useState(false);

  //handle Submit
  const handleSubmit = () => {
    setOpen(true);
  };

  //handle close
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        color="success"
        {...props}
      />
    );
  });

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            minWidth: "400px",
            width: "50%",
          }}
        >
          <Typography variant="h4" align="center">
            Contact us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              id="firstName"
              placeholder="First Name"
              variant="outlined"
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
                  fontSize: "1.3em",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faUserAlt} color="#FFF" size="1x" />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              fullWidth
              id="lastName"
              placeholder="Last Name"
              variant="outlined"
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
                  fontSize: "1.3em",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faUserAlt} color="#FFF" size="1x" />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Box>
          <TextField
            id="email"
            placeholder="Email"
            variant="outlined"
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
                fontSize: "1.3em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faEnvelope} color="#FFF" size="1x" />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            id="phoneNumber"
            placeholder="Phone Number"
            variant="outlined"
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
                fontSize: "1.3em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faPhone} color="#FFF" size="1x" />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            id="message"
            placeholder="Enter your message here."
            variant="outlined"
            fullWidth
            multiline
            rows={6}
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
                fontSize: "1.3em",
              },
            }}
          ></TextField>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              fontSize: "1.5em",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Thank you for contacting us. We received your response.
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </form>
  );
};

export default Contact;
