import React from "react";
import {createTheme, ThemeProvider, Typography} from "@mui/material";


export default function Header(){
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '3rem',
                color: '#e0e0e0',
                textAlign: "center",
                padding: "1rem",
                backgroundColor: "#ff6d00"
            }}})

    return (
        <ThemeProvider theme={theme}>
        <Typography sx={{fontSize: "2rem", textAlign: "center"}} variant="h1" component="h1">
            Book Library
        </Typography>
        </ThemeProvider>

    )
}