import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FormLabel, Stack } from "react-bootstrap";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "60vh",
        my: 5,
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
            label="First Name"
            variant="outlined"
          ></TextField>

          <TextField
            fullWidth
            id="lastName"
            label="Last Name"
            variant="outlined"
          ></TextField>
        </Box>

        <TextField id="email" label="Email" variant="outlined"></TextField>

        <TextField
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
        ></TextField>

        <TextField
          id="message"
          label="Enter your message here."
          variant="outlined"
          fullWidth
          multiline
          rows={3}
        ></TextField>

        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  );
};

export default Contact;
