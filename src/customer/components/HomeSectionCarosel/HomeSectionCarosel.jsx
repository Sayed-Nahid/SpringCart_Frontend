import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS for the carousel

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 2, 3, 4, 5].map((item) => <HomeSectionCard key={item} />);

    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
                responsive={responsive}
            />
        </div>
    );
};

export default HomeSectionCarosel;
