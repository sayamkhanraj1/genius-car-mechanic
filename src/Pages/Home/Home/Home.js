import React from 'react';
import Login from '../../Login/Login/Login';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Service/Services/Services';

const Home = () => {
         return (
                  <div id="home">
                           <Banner />
                           <Services />
                           <Experts />
                  </div>
         );
};

export default Home;