import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/dashboard'>
          Panel
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/ad-create'>
          Oluştur
        </NavLink>
      </li>
    </ul>
  );
};
export default SideBar;
