import React from 'react';
import ProductDesign from './ProductDesign';
import Accord from './Accord';

const Hero = ({ 
    title, 
    description, 
    imageSrc, 
    imageAlt, 
    highlightText, 
    secondaryText, 
    tertiaryText 
}) => {
    return (
        <div>
            <ProductDesign 
                title={title}
                description={description}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                highlightText={highlightText}
                secondaryText={secondaryText}
                tertiaryText={tertiaryText}
            />
            <Accord />
        </div>
    );
}

export default Hero;
