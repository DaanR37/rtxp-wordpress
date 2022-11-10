import NavBar from "../Navbar/NavBar";
import Animatedpage from "../Animatedpage";
import "./homepage.scss";

export default function HomePage() {
    return (
        <Animatedpage>
            <section id="homepage-container">
                <div className="background-image-hp" style={{
                    backgroundImage: "url(images/background-image-hp.jpg)"
                }}>
                    <div className="navbar-homepage">
                        <NavBar />
                    </div>
                    <div className="rtxp-logo">
                        <img src="images/rtxp-main-logo.svg" alt="rtxp logo" />
                    </div>
                    <div className="tickets-sticker">
                        <img src="images/tickets-sticker.svg" alt="tickets sticker" />
                    </div>
                    <div className="blue-cross">
                        <img src="images/blue-cross-icon.svg" alt="blue cross" />
                    </div>
                    <div className="red-arrows">
                        <img src="images/red-arrows-icon.svg" alt="red arrows" />
                    </div>
                    <div className="fragile-sticker-hp">
                        <img src="images/our-art-is-not-fragile.svg" alt="fragile sticker" />
                    </div>
                </div>
            </section>
        </Animatedpage>
    )
}