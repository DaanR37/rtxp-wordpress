import NavBar from "../Navbar/NavBar";
import Animatedpage from "../Animatedpage";
import "./shop.scss";

export default function Shop() {
    return (
        <Animatedpage>
            <section id="shop-container">
                <div className="navbar-shop">
                    <NavBar />
                </div>
            </section>
        </Animatedpage>
    )
}
