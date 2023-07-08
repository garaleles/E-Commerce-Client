import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import { AuthProvider } from './context/Auth.js';
import Main from './components/nav/Main.js';
import { Toaster } from 'react-hot-toast';
import AccountActivate from './pages/auth/AccountActivate.js';
import ForgotPassword from './pages/auth/ForgotPassword.js';
import AccessAccount from './pages/auth/AccessAccount.js';
import Dashboard from './pages/user/Dashboard.js';
import AdCreate from './pages/user/AdCreate.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Main />
          <Toaster />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/auth/account-activate/:token'
              element={<AccountActivate />}
            />
            <Route path='/auth/forgot-password' element={<ForgotPassword />} />
            <Route
              path='/auth/access-account/:token'
              element={<AccessAccount />}
            />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/ad-create' element={<AdCreate />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
