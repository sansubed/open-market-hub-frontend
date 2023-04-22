import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const GradientBox = styled(Box)`
  background: linear-gradient(135deg, #4f3a65 0%, #2774ae 100%);
`;

const FeedbackSection = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

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
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <GradientBox
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        px: 5,
        minHeight: "50vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="#FFF" mb={3}>
          Leave us a feedback
        </Typography>
        <Typography variant="h6" color="#c6c4c4" textAlign="center">
          We're always looking for ways to improve our services.
        </Typography>
        <Typography variant="h6" color="#c6c4c4" mb={5} textAlign="center">
          Please share your feedback with us!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
            maxWidth: 700,
            color: "#FFF",
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Name"
            variant="outlined"
            color="secondary"
            fullWidth
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
                padding: "10px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faUser} color="#FFF" size="2x" />
                </InputAdornment>
              ),
            }}
            required
          />

          <TextField
            placeholder="Email"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              style: {
                color: "#FFF",
              },
            }}
            InputProps={{
              style: {
                color: "#FFF",
                border: "2px solid #FFF",
                borderRadius: "15px",
                padding: "10px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faEnvelope} color="#FFF" size="2x" />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            placeholder="Message"
            variant="outlined"
            color="secondary"
            multiline
            rows={8}
            fullWidth
            InputLabelProps={{
              style: {
                color: "#FFF",
                alignItems: "center",
              },
            }}
            InputProps={{
              style: {
                color: "#FFF",
                border: "2px solid #FFF",
                borderRadius: "15px",
                padding: "10px",
              },
            }}
            required
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              p: 2,
              fontSize: "1.3em",
              borderRadius: "20px",
            }}
            onClick={handleClick}
          >
            Submit Feedback
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
              Thank you for your feedback!
            </Alert>
          </Snackbar>
        </Box>
      </motion.div>
    </GradientBox>
  );
};

export default FeedbackSection;
