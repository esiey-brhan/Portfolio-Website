import  {useState} from 'react'
import {navLinks} from "../Constants/index.js";

/**
 * Returns a list of links for the navigation bar.
 *
 * The links are generated from the items in the `navLinks` array,
 * which is defined in the `Constants/index.js` file.
 *
 * @returns {JSX.Element} The list of navigation links.
 */
const NavItems = () => {

    return (
        <ul className="nav-ul">

            { navLinks.map(({ id, name, href }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                </li>

            ))}
        </ul>
    )
}
/**
 * A sticky header component with a toggleable menu.
 *
 * @function Navbar
 * @returns {JSX.Element} A sticky header with a toggleable menu.
 * @example
 * <Navbar />
 */

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevState) => !prevState);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl max-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Esiey
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-40 hover:text-white focus:outline-none sm:hidden flex" >
                        <img src={isOpen ? "./assets/close.svg": "./assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>

            </div>
            <div className= {`nav-sidebar ${ isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems/>


                </nav>
            </div>

        </header>
    )
}

export default Navbar