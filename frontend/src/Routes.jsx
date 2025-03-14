import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contratos from './pages/Contratos/Contratos';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contratos" element={<Contratos />} />
        </Routes>
    </Router>
)

export default AppRoutes;