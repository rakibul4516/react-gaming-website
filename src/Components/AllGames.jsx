import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types'


function AllGames({ allGames }) {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next slide
            sliderRef.current.slickNext();
        }, 5000); // 5000 milliseconds (5 seconds)

        return () => {
            clearInterval(interval);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <div className="max-md:w-10/12 w-11/12 mx-auto">
                <Slider ref={sliderRef} {...settings}>
                    {allGames.map((image, index) => (
                        <div key={index} className="w-full h-96 relative">
                            <img
                                src={image.background_image}
                                alt={`Image ${index}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-opacity-50 text-white p-4">
                                <h2 className="text-2xl font-semibold">{image.name}</h2>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                                    {image.buttonLabel}Play Now
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

AllGames.propTypes = {
    allGames:PropTypes.array.isRequired
}
export default AllGames