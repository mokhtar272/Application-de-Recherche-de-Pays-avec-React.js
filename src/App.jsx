// App.jsx
import { createContext } from 'react';
import './App.css';
import Affiche from './affiche';
import Home from './home';
import Navv from './nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const ThemeContext = createContext(null);

function App() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            <Router>
                <Navv />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/countrie/:id" element={<Affiche />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;