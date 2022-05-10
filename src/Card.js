import React from 'react';
import './Card.css' ;

function Card() {
    return (
        <div className='card'>
          <h2>Explore in top Loaction</h2>
          <h5>Checkout the options and book Today</h5>
          <div className='card-mapping'>
            {/* <div style={{width: '100px'}}> */}
            <div className='card-child'>
                <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt="" style={{width:"100%"}}/>
                <div >
                    <h3>Golf Course Road</h3>
                    <h4>1100+</h4>
                </div>
            </div>
            <div className='card-child'>
            <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt="" style={{width:"100%"}}/>
                <div >
                    <h3>Golf Course Road</h3>
                    <h4>1100+</h4>
                </div>
            </div>
            <div className='card-child'>
            <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt="" style={{width:"100%"}}/>
                <div >
                    <h3>Golf Course Road</h3>
                    <h4>1100+</h4>
                </div>
            </div>
            <div className='card-child'>
            <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt="" style={{width:"100%"}}/>
                <div >
                    <h3>Golf Course Road</h3>
                    <h4>1100+</h4>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Card