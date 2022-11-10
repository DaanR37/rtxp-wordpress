import NavBar from "../Navbar/NavBar";
import Animatedpage from "../Animatedpage";
import "./tickets.scss";

export default function Tickets() {
    return (
        <Animatedpage>
            <section id="tickets-container">
                <div className="navbar-tickets">
                    <NavBar />
                </div>
            </section>
        </Animatedpage>
    )
}
