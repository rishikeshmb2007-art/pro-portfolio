import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Admin from './components/Admin'; // Itha namma next create pannuvom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;