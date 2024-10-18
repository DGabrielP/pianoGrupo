import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import PageOne from './pages/pageOne';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageOne" element={<PageOne/>} />
      </Routes>
    </Router>
  );
}

export default App;
