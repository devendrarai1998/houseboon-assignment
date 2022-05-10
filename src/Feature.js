import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

export default function SimpleContainer() {
  return (
      <>
      <CssBaseline />
      <Container style={{display:"flex", alignItems:"center", justifyContent:"center"}}>

        <Container>
          <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          width= "550px"
          height= "500px"
          objectFit ="fill"
          alt="Paella dish"
          />

        </Container>
        <Container>
          <div>
            <p>Benefits</p>
            <h3>Why We Are Best</h3>
         
            <h3>Brokerage Free</h3>
            <h4>Brokerage Free Community</h4>
            <h5>We offer brokerage free community to rent and lease your property</h5>
          
            <h3>Brokerage Free</h3>
            <h4>Brokerage Free Community</h4>
            <h5>We offer brokerage free community to rent and lease your property</h5>
          
            <h3>Brokerage Free</h3>
            <h4>Brokerage Free Community</h4>
            <h5>We offer brokerage free community to rent and lease your property</h5>
          </div>
        </Container>
     </Container>

    </>
  );
}
