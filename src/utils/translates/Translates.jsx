import React, { useState, useEffect } from 'react';
import i18n from '../translates/resources';

export default function Translates() {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Загрузка языка из localStorage при монтировании
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        console.log('Current language:', i18n.language);
        console.log('i18n object:', i18n);
    }, []); // Убрана зависимость i18n.language

    const handleChangeLanguage = (event) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        console.log('Attempting to change language to:', newLanguage);

        if (i18n && typeof i18n.changeLanguage === 'function') {
            i18n.changeLanguage(newLanguage)
                .then(() => {
                    console.log(`Language changed to ${newLanguage}`);
                    // Сохраняем язык в localStorage
                    localStorage.setItem('language', newLanguage);
                })
                .catch(err => console.error('Error changing language:', err));
        } else {
            console.error('i18n or changeLanguage function is not available.');
        }
    };

    return (
        <div className="language-switcher">
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">
                    <div className="language-option">
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/64px-Flag_of_the_United_Kingdom.svg.png' alt="English" className="language-flag" />
                        EN
                    </div>
                </option>
                <option value="ru">
                    <div className="language-option">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/64px-Flag_of_Russia.svg.png' alt="Русский" className="language-flag" />
                        RU
                    </div>
                </option>
            </select>
        </div>
    );
}