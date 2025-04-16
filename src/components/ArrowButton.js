// components/ArrowButton.jsx
import './ArrowButton.css';

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button
      className={`arrow-button ${direction === 'left' ? 'arrow-left' : 'arrow-right'}`}
      onClick={onClick}
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default ArrowButton;
