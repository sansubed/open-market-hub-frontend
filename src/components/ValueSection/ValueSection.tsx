import {
  faFaceSmile,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const ValueSection = () => {
  const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 50px auto;
    padding: 30px;
    border-radius: 20px;
  `;

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
        py: 5,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" mb={2} color="secondary">
          Our Values
        </Typography>
        <Typography variant="h5">
          We Celebrate All The Students And Their Journey.
        </Typography>
        <br />
      </Box>
      <StyledBox>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 7,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              height: "300px",
              width: "300px",
              background:
                "linear-gradient(135deg, rgb(79, 58, 101) 0%, rgb(39, 116, 174) 100%)",
              color: "#FFF",
            }}
          >
            <FontAwesomeIcon icon={faUsers} size="7x" color="#FFF" />
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontWeight: "bold" }}
              align="center"
              maxWidth="300px"
            >
              Bringing Community Closer
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "50%",
              height: "300px",
              width: "300px",
              background:
                "linear-gradient(135deg, rgb(79, 58, 101) 0%, rgb(39, 116, 174) 100%)",
              color: "#FFF",
            }}
          >
            <FontAwesomeIcon icon={faFaceSmile} size="7x" />
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", fontWeight: "bold" }}
              align="center"
              maxWidth="300px"
            >
              Guaranteed Top Notch User Experience
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              height: "300px",
              width: "300px",
              background:
                "linear-gradient(135deg, rgb(79, 58, 101) 0%, rgb(39, 116, 174) 100%)",
              color: "#FFF",
            }}
          >
            <FontAwesomeIcon icon={faShieldHalved} size="7x" />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", marginTop: "20px" }}
            >
              Ensuring Topmost Security
            </Typography>
          </Box>
        </Box>
      </StyledBox>
      <Typography variant="h5" pb={5} align="center" color="#272525">
        We Are Proud To Make Student's Life Easier
      </Typography>
    </Box>
  );
};

export default ValueSection;
