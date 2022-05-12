import * as React from 'react';
import "./Feature.css";
import CssBaseline from '@mui/material/CssBaseline';
//import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';



const listData=[
  
  {title:"Brokerage Free Community",heading:"Brokerage Free",description:"We offer brokerage free community to rent and lease your property"},
  
  {title:"Brokerage Free Community",heading:"Brokerage Free",description:"We offer brokerage free community to rent and lease your property"},
  {title:"Brokerage Free Community",heading:"Brokerage Free",description:"We offer brokerage free community to rent and lease your property"},

]

const ListItem=({heading ,title,description})=>{
  return(
    <div style={{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",padding:"20px 0px"}}>
    <span style={{background:"#D1DAFD",padding:"3px",borderRadius:"2px",color:"blue"}}>{heading}</span>
    <span style={{padding:"3px", fontWeight:"bold"}}>{title}</span>
    <span style={{padding:"3px",color:"#808080"}}>{description}</span>

    </div>
  )
}



export default function SimpleContainer() {
  return (
      <>
   <CssBaseline /> 
      <div className="container">

        <div style={{width:"50%"}}>
          <CardMedia 
          className="cardMedia"
          component="img"
          src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Paella dish"
          />

        </div>
        <div style={{width:"50%",padding:"20px"}}>
                  <div>
            <span style={{color:"#808080"}}>Benefits</span><br/>
            <span style={{fontWeight:"bold",fontSize:"xx-large"}}>Why We Are Best</span>
         </div>
         <div>
           {listData.map(item=><ListItem {...item} />)}
          </div>
        </div>
     </div>

    </>
  );
}
