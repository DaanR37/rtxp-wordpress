import NavBar from "../Navbar/NavBar";
import Animatedpage from "../Animatedpage";
import "./events.scss";

export default function Events() {
    return (
        <Animatedpage>
            <section id="events-container">
                <div className="navbar-events">
                    <NavBar />
                </div>
            </section>
        </Animatedpage>
    )
}

