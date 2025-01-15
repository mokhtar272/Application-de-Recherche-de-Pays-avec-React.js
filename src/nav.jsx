// nav.jsx
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Si vous voulez ajouter des icônes

const Navv = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Vérifie si une préférence est déjà sauvegardée
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        // Met à jour la classe sur le document HTML
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="Navv bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h3 className="text-gray-800 dark:text-white font-bold text-xl">
                    Where in the world?
                </h3>
                <button 
                    onClick={toggleDarkMode}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg 
                             hover:bg-gray-100 dark:hover:bg-gray-700 
                             transition-colors duration-200"
                >
                    {darkMode ? (
                        <>
                            <FaSun className="text-yellow-500" />
                            <span className="text-gray-800 dark:text-white">Light Mode</span>
                        </>
                    ) : (
                        <>
                            <FaMoon className="text-gray-600" />
                            <span className="text-gray-800 dark:text-white">Dark Mode</span>
                        </>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navv;