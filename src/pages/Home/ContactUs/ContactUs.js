import { Container, Typography } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const ContactUs = () => {
    const element = <FontAwesomeIcon icon={faMobileAlt} />
    const element2 = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const element1 = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div>
            <Container sx={{mt:2}}>
            <Typography variant="subtitle2" gutterBottom component="div">
            We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our services, as well as allow you to conveniently experience the changes we bring to the automobile industry.
            </Typography>
            </Container>
            
            <p>{element}  01925346 & 05 86452839</p>
            <p> {element1}admin@carlia.com</p>
            <p>{element2}Level 6, Plot 10, Road 12, Block F
             Niketan, Gulshan, Dhaka-1212, Bangladesh.</p>
        </div>
    );
};

export default ContactUs;