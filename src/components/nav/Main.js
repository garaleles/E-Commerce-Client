import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <nav className='nav d-flex justify-content-between lead'>
      <NavLink className='nav-link' aria-current='page' to='/'>
        Ana Sayfa
      </NavLink>
      <NavLink className='nav-link' to='/login'>
        Giriş Yap
      </NavLink>
      <NavLink className='nav-link' to='/register'>
        Üye Ol
      </NavLink>
      <div className='dropdown'>
        <li>
          <a
            className='nav-link dropdown-toggle'
            data-bs-toggle='dropdown'
          >
            Kullanıcı İşlemleri
          </a>
          <ul className='dropdown-menu'>
            <li>
              <a className='nav-link' to='/dashboard'>
                Dashboard
              </a>
            </li>
            <li>
              <a className='nav-link'>Çıkış Yap</a>
            </li>
          </ul>
        </li>
      </div>
    </nav>
  );
};
export default Main;
