import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import "../Buscador/buscador.css";

export default function Buscador({ placeholder }) {
  return (
    <Paper
      className="input"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 55,
        borderRadius: 2,
        boxShadow: "none",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
