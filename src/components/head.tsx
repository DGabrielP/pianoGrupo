
// head.tsx
import { Link } from 'react-router-dom'; // Para la navegación entre las páginas
import './head.css'; // Importa los estilos de CSS

export default function Head() {
  return (
    <div className="header">
      <div className="leftH">
        <h1>Piano Kawi</h1>
      </div>
      <div className='centerH'>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Nueva sesiòn</Link></li>
            <li><Link to="/game">Seguir donde lo deje</Link></li>
          </ul>
        </nav>
      </div>
      <div className='rightH'>

      </div>
    </div>
  );
}
