import "./navbar.scss";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav id="nav-container">
            <div className="menu-sticker">
                <Link to="/" reloadDocument>
                    <img src="images/rtxp-menu-sticker.svg" alt="menu sticker" />
                </Link>
            </div>

            <div className="button-container font-face-at">
                <button>
                    <NavLink to="/experience" reloadDocument className="btn-experience">
                        <h3>the experience</h3>
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/tickets" reloadDocument className="btn-tickets">
                        <h3>tickets</h3>
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/events" reloadDocument className="btn-events">
                        <h3>events</h3>
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/about" reloadDocument className="btn-about">
                        <h3>about</h3>
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/info" reloadDocument className="btn-info">
                        <h3>info</h3>
                    </NavLink>
                </button>
                <button>
                    <NavLink to="/shop" reloadDocument className="btn-shop">
                        <h3>shop</h3>
                    </NavLink>
                </button>
            </div>

            <div className="socials-container">
                <a href="https://www.facebook.com/profile.php?id=100084377228814" target="_blank" rel="noreferrer">
                    <img src="images/facebook-logo.svg" alt="facebook logo" />
                </a>
                <a href="https://www.instagram.com/rtxp_amsterdam/" target="_blank" rel="noreferrer">
                    <img src="images/instagram-logo.svg" alt="instagram logo" />
                </a>
            </div>
        </nav>
    )
}
