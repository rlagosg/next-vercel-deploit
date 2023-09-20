import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  return (
    <nav className={ styles['menu-container'] }>
        <ActiveLink texto={"Home"} href={"/"} />
        <ActiveLink texto={"About"} href={"/about"} />
        <ActiveLink texto={"Contact"} href={"/contact"} />        
    </nav>
  )
}
