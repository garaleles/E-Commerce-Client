import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL} from '../config';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: '',
        refreshToken: '',
    });

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem('auth'));
        if (authData) {
            setAuth(authData);
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

//configure axios
axios.defaults.baseURL = API_URL;

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};
