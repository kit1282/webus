import React from 'react';
import ProductDesign from './Productdesign';
import Accord from './Accord';

const Hero = ({ 
    title, 
    description, 
    imageSrc, 
    imageAlt, 
    highlightText, 
    secondaryText, 
    tertiaryText,
    accordionItems 
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
            <Accord accordionItems={accordionItems} />
        </div>
    );
}

export default Hero;
