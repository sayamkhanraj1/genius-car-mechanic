import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
         const {id, name, price, description, img} = service;
         
         return ( 
                  <div className="col-md-4 col-12 pb-3">
                       <div className="service ">
                            <img src={img} alt="" />
                       <h3>{name}</h3>
                       <h5>Price: {price}</h5>
                       <p className="px-3 p-3">{description}</p>
                       <Link to={`/booking/${id}`}>
                       <button className="btn-warning mb-3 p-2">Book {name.toLowerCase()}</button>
                       </Link>
                       </div>
                  </div>
         );
};

export default Service;