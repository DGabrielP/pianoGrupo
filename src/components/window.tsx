import { useNavigate } from 'react-router-dom';
import './window.css'; 

export default function Window() {
  const navigate = useNavigate();

  return (
    <div className="window-container">
      <div className='image-container'><img
          src="https://via.placeholder.com/150"
          alt="img"
          
        />
      </div>
      <button className="window-button" onClick={() => navigate('/pageOne')}>
        Jugar
      </button>
    </div>
  );
}
