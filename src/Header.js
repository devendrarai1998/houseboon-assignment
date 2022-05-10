import React from 'react'
import './Header.css'
//import Paper from "@mui/material/Paper";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Profile from "./Profile";

function Header() {
    return (
        <div className='header'>              
                <img
                    className="header__icon"
                    src="https://pngimg.com/uploads/house/small/house_PNG73.png"
                    alt="Houseboon"
                />

            <div className='header__right'>
            <Box
               component="form"
               sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
               noValidate 
               autoComplete="off" 
            >
{/*             <TextField id="outlined-basic" label="Check Tenenacy Space" variant="outlined" /> */}
            <TextField id="filled-basic" label="List Your Place" variant="filled" />
            </Box>
            </div>
            <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                <NotificationsActiveIcon />
                <Profile />
            </div>
            

        </div>
    )
}

export default Header;