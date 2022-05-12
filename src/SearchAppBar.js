import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

 const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
},
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
})); 
 

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(10)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
<div style={{display:"flex",height:"150px",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
      <AppBar position="static" style={{width:"60%",borderRadius:"15px",display:"flex",flexDirection:"row",
      padding:"8px 20px",alignItems:"center",justifyContent:"space-between"}}> 
          
          <div style={{display:"flex",}}>
             <Search style={{ display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",padding:"2px 5px",background:"transparent"}}>
                <SearchIcon />
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': '' }}/>
             </Search>
          </div>
        

          <Typography component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,background: "blue", padding:"15px",width:"100px",borderRadius:"5px"}}
            >
            Search
          </Typography> 

        
        
      </AppBar>

      <button style={{padding:"12px",border:"1px solid blue",color:"blue",borderRadius:"12px",background:"white"}}>
        List Your Places
      </button>
      </div> 
  );
}

