// components/Slide.jsx
import './Slide.css';

const Slide = ({ imageUrl, altText }) => {
  return (
    <div className="slide">
      <img src={imageUrl} alt={altText} className="slide-image" />
    </div>
  );
};

export default Slide;
