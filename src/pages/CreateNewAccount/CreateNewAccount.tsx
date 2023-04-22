import { createUserWithEmailAndPassword } from "@firebase/auth";
import {
  faEnvelope,
  faLock,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CSSProperties, useState } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

interface Props {
  style?: CSSProperties;
}

const CreateNewAccount: React.FC<Props> = ({ style }) => {
  //navigate into another page;
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //function to handle submit
  const handleSubmit = async (e: any) => {
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(email, password);
    } catch (err) {
      <Alert severity="error">
        User Email already Exist. Please use new one
      </Alert>;
      console.log(err);
    }
    navigate("/login");
  };
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
            name="firstName"
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
                  <FontAwesomeIcon icon={faUser} color="#FFF" size="1x" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
            style={styles.textField}
            name="lastName"
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
                  <FontAwesomeIcon icon={faUserSecret} color="#FFF" size="1x" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TextField
          fullWidth
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
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
                <FontAwesomeIcon icon={faEnvelope} color="#FFF" size="1x" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
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
                <FontAwesomeIcon icon={faLock} color="#FFF" size="1x" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default CreateNewAccount;
