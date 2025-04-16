import { useEffect, useState, useRef } from 'react';
import Slide from './Slide';
import ArrowButton from './ArrowButton';
import './Carousel.css';

const Carousel = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, interval);

        return () => resetTimeout();
    }, [currentIndex, images.length, interval]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, idx) => (
                        <Slide key={idx} imageUrl={img.url} altText={img.alt} />
                    ))}
                </div>
                <ArrowButton direction="left" onClick={prevSlide} />
                <ArrowButton direction="right" onClick={nextSlide} />
            </div>
        </div>
)}
export default Carousel;
