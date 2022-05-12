import React from "react";
import "./Card.css";

const CardItem = ({ link, heading, description }) => (
  <div style={{width:"20%",margin:"17px",borderRadius:"5px"}}>
      <img style={{width:"200px",height:"250px",objectFit:"cover",borderRadius:"5px"}} src={link} alt="image_link" className="cardItem" />
        <div style={{display:"flex",flexDirection:"column",padding:"2px 0px"}}>
      <span style={{padding:"1px",fontWeight:"bold"}}>{heading}</span>
      <span style={{color:"#808080",fontSize:"large"}}>{description}</span>
    </div>
  </div>
);

const cardData = [
  {
    link: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
    heading: "Golf Course Road",
    description: "1100+ options",
  },
  {
    link: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
    heading: "Golf Course Road",
    description: "1100+ options",
  },
  {
    link: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
    heading: "Golf Course Road",
    description: "1100+ options",
  },
  {
    link: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
    heading: "Golf Course Road",
    description: "1100+ options",
  },  {
    link: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
    heading: "Golf Course Road",
    description: "1100+ options",
  },
];

function Card() {
  return (
    <div style={{padding:"30px"}}>
        <div style={{display:"flex",flexDirection:"column",padding:"20px"}}>
        <span style={{fontWeight:"bold",fontSize:"xl"}}>Explore in top Location</span>
      <span style={{color:"#808080"}}>Checkout the options and book Today</span>
      <div style={{height:"2.5px",width:"15%",background:"#909090",marginTop:"5px",borderRadius:"50px"}}/>

            </div>

   
      <div className="card-container">
        <div className="card">
          {cardData.map((item) => (
            <CardItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
