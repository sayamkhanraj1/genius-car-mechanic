import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404.png'

const Error = () => {
         return (
                  <div>
                       <img className="w-100" src={error} alt="" />
                       <Link to="/"><button>Goo Back</button></Link>    
                  </div>
         );
};

export default Error;