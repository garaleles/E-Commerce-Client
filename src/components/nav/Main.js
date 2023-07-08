import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

const Main = () => {
  //context
  const [auth, setAuth] = useAuth();
  //hooks
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('auth');
    setAuth({
      user: '',
      token: '',
      refreshToken: '',
    });
    navigate('/login');
  };
  const loggedIn =
    auth.user !== null && auth.token !== '' && auth.refreshToken !== '';

  return (
    <nav className='nav d-flex justify-content-between lead'>
      <NavLink className='nav-link' aria-current='page' to='/'>
        Ana Sayfa
      </NavLink>
      {!loggedIn ? (
        <>
          <NavLink className='nav-link' to='/login'>
            Giriş Yap
          </NavLink>
          <NavLink className='nav-link' to='/register'>
            Üye Ol
          </NavLink>
        </>
      ) : (
        ''
      )}

      {loggedIn ? (
        <div className='dropdown'>
          <li>
            <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>
              {auth?.user?.fullName?.toUpperCase()
                ? auth.user.fullName
                : auth?.user?.userName?.toUpperCase()}
            </a>
            <ul className='dropdown-menu'>
              <li>
                <NavLink className='nav-link' to='/dashboard'>
                  Kullanıcı Paneli
                </NavLink>
              </li>
              <li>
                <a onClick={logout} className='nav-link'>
                  Çıkış Yap
                </a>
              </li>
            </ul>
          </li>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};
export default Main;
