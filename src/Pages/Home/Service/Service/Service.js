import React from 'react';
import './Service.css'

const Service = ({service}) => {
         const {name, price, description, img} = service;

         return (
                  <div className="service mt-3">
                       <img src={img} alt="" />
                       <h3>{name}</h3>
                       <h5>Price: {price}</h5>
                       <p className="px-3">{description}</p>
                  </div>
         );
};

export default Service;