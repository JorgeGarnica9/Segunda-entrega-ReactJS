import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    return (
    <>
        <header className="header">
      {/* logo de la marca */}
      <NavLink to={'/'} className="logo-container"><div >
        JG/GAMES
      </div></NavLink>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <NavLink to={'category/games'} ><Button category='JUEGOS'/></NavLink>
          </li>
          <li>
            <NavLink to={'category/accesories'}><Button category='ACCESORIOS'/></NavLink>
          </li>
          <li>
            <NavLink to={'category/shirts'}><Button category='REMERAS'/></NavLink>
          </li>
          <li>
            <NavLink to={'category/contact'}><Button category='CONTACTO'/></NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget/>

    </header>
    </>
  );
}