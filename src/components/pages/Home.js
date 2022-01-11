import React from "react";
import { Typography, Box, ListItem, ListItemText } from "@mui/material";
import { GiPlainCircle } from "react-icons/gi";
import { styled } from '@mui/material/styles'

const HeadingTypography = styled(Typography)(() => ({
    color: "#9e468f",
    fontFamily: 'Georgia,Times,serif'
}));

const Home = (props) => {
  return (
    <Box>
      <HeadingTypography
        sx={{
          fontFamily: "cursive",
          fontWeight: "bold",
          color: "#595c61",
          mt: "80px",
          textAlign: "center",
          mb: 10,
        }}
        variant="h4"
        color="primary"
        gutterBottom
      >
        Problem Context
      </HeadingTypography>
      <Typography
        sx={{
          fontFamily: "cursive",
          color: "#595c61",
          mt: "150px",
          textAlign: "center",
          p: 10,
          ml: 10,
          fontSize: "2em",
        }}
        variant="p"
        color="primary"
        gutterBottom
      >
        Our problem is set in the planet of Lengaburu…in the distant distant
        galaxy of Tara B. After the recent war with neighbouring planet
        Falicornia, King Shan has exiled the Queen of Falicornia for 15 years.
        Queen Al Falcone is now in hiding. But if King Shan can find her before
        the years are up, she will be exiled for another 15 years….
      </Typography>
      <HeadingTypography
        sx={{
          fontFamily: "cursive",
          fontWeight: "bold",
          color: "#595c61",
          mt: "80px",
          textAlign: "center",
          mb: 10,
        }}
        variant="h4"
        color="primary"
        gutterBottom
      >
        Finding Falcone
      </HeadingTypography>
      <Typography
        sx={{
          fontFamily: "cursive",
          color: "#595c61",
          mt: "150px",
          textAlign: "center",
          p: 10,
          ml: 10,
          fontSize: "2em",
        }}
        variant="p"
        color="primary"
        gutterBottom
      >
        King Shan has received intelligence that Al Falcone is in hiding in one
        of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor.
        However he has limited resources at his disposal & can send his army to
        only 4 of these planets. This coding problem is to help King Shan find
        Al Falcone.
      </Typography>
      <Typography
        sx={{
          fontFamily: "cursive",
          fontWeight: "bold",
          color: "#595c61",
          mt: "80px",
          textAlign: "center",
          mb: 4,
        }}
        variant="h4"
        color="primary"
        gutterBottom
      >
        Objective
      </Typography>
      <ul>
        <ListItemText sx={{ textAlign: "center" }}>
          <GiPlainCircle /> select 4 planets to search (out of the total 6)
        </ListItemText>{" "}
        <br />
        <ListItemText sx={{ textAlign: "center" }}>
          <GiPlainCircle /> select which space vehicles to send to these planets
        </ListItemText>{" "}
        <br />
        <ListItemText sx={{ textAlign: "center" }}>
          <GiPlainCircle /> see how much time it will take for the vehicles to
          reach their targets{" "}
        </ListItemText>
        <br />
        <ListItemText sx={{ textAlign: "center" }}>
          <GiPlainCircle /> show final result of success or failure
        </ListItemText>
        <br />
      </ul>
    </Box>
  );
};
export default Home;
