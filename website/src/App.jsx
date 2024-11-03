import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import YouTube from './pages/icons/youtube';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icons/youtube" element={<YouTube />} />
    </Routes>
  )
}

export default App