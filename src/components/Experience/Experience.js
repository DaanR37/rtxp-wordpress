import NavBar from "../Navbar/NavBar";
import Animatedpage from "../Animatedpage";
import "./experience.scss";
import Media from "./Media/Media";
import Posts from "./Posts/Posts";

export default function Experience() {
    return (
        <Animatedpage>
            <section id="experience-container">
                <div className="background-image-exp" style={{
                    backgroundImage: "url(images/background-image-exp.jpg)"
                }}>
                    <div className="navbar-experience">
                        <NavBar />
                    </div>
                    <div className="monet-container">
                        <div className="text-container">
                            <Posts />
                        </div>
                        <div className="image-container">
                            <Media />
                        </div>
                    </div>
                    <div className="red-circle">
                        <img src="images/red-circle-icon.svg" alt="red circle" />
                    </div>
                    <div className="umbrella-sticker">
                        <img src="images/umbrella-icon.svg" alt="umbrella sticker" />
                    </div>
                    <div className="fragile-sticker-exp">
                        <img src="images/our-art-is-not-fragile.svg" alt="fragile sticker" />
                    </div>
                </div>
            </section>
        </Animatedpage>
    );
}