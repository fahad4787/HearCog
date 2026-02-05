import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap'
import logo from "../../assets/images/logo.svg";
import styles from "./index.module.scss";
function Header() {
  const links = [
    {
      id: 1,
      to: "/",
      label: "Home"
    },
    {
      id: 2,
      to: "/about",
      label: "About"
    },
    {
      id: 3,
      to: "/contact",
      label: "Contact"
    },
    {
      id: 4,
      to: "/how-it-works",
      label: "How it Works"
    },
    {
      id: 5,
      to: "/join-as-provider",
      label: "Join as Provider"
    }
  ]
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <ul>
           {
            links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))
           }
          </ul>
        </nav>
        <div className={styles.cta}>
          <Link to="/login" className='linkBtn'>Sign Up</Link>
          <Button>
            <span>Login</span>
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
