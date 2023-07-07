import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h4" fontWeight="bold" height={45} m={1} sx={{ color: 'white', fontFamily: 'Arial, sans-serif', letterSpacing: '-0.04em', '@media (max-width: 700px)': { display: 'none' } }}>
        YouTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
