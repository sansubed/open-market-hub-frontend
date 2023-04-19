import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  style?: CSSProperties;
}

const CreateNewAccount: React.FC<Props> = ({ style }) => {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      padding: "20px",
      color: "white",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "800px",
      padding: "20px",
      borderRadius: "5px",
    },
    textField: {
      marginBottom: "2em",
    },
    button: {
      marginTop: "20px",
      fontSize: "1.2rem",
      padding: "12px 30px",
      borderRadius: "50px",
      fontWeight: "bold",
      boxShadow: "none",
    },
  };

  return (
    <div style={style} {...styles.root}>
      <Typography variant="h4" gutterBottom>
        Create a New Account
      </Typography>
      <Typography variant="body1" mb={3}>
        Its easy and quick
      </Typography>

      <form style={style} {...styles.form}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "spaceAround",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            placeholder="First Name"
            variant="outlined"
            style={styles.textField}
            required
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
                fontSize: "1.3em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faUser} color="#FFF" size="2x" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="Last Name"
            variant="outlined"
            style={styles.textField}
            required
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
                fontSize: "1.3em",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faUser} color="#FFF" size="2x" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TextField
          fullWidth
          placeholder="Email Address"
          variant="outlined"
          style={styles.textField}
          type="email"
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
              fontSize: "1.3em",
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faEnvelope} color="#FFF" size="2x" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="Password"
          variant="outlined"
          style={styles.textField}
          type="password"
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
              fontSize: "1.3em",
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faLock} color="#FFF" size="2x" />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" style={styles.button}>
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default CreateNewAccount;
