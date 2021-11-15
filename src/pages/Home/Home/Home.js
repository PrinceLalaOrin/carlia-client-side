import React from 'react';
import banner from '../../../images/home banner.jpg'
import ContactUs from '../ContactUs/ContactUs';
import LoadHomeData from '../LoadHomeData/LoadHomeData';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div style={{width:'100%'}}>
          <img style={{marginTop:'4px'}} src={banner} alt="" />
          <LoadHomeData/>
          <Service/>
          <ContactUs/>
        </div>
    );
};

export default Home;