// src/components/LoginButton.js
import React, { useEffect } from 'react';
import axiosInstance from '../axiosConfig';

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = 'https://balanced-delight-production.up.railway.app/oauth2/authorization/google'; // URL para iniciar el proceso de OAuth2 con Google
    };

    // const todasLasCookies = document.cookie;
    // console.log(todasLasCookies);
    // useEffect(() => {
    // axiosInstance.get('/api/carreras')
    //     .then((response) => console.log(response.data))
    //     .catch(err => console.log(err))
    
    // }, [])
    function getCookieValue(cookieName) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        
        for(let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        
        return "";
    }
    
    // Obtener el valor de la cookie _ga
    const gaCookieValue = getCookieValue('_ga');
    console.log("Valor de la cookie _ga:", gaCookieValue);
    return (
        <button onClick={handleLogin}>
            Iniciar sesión con Google
        </button>
    );
};

export default LoginButton;
