import NavBar from "../Navbar/NavBar";
import Animatedpage from "../Animatedpage";
import "./about.scss";

export default function About() {
  return (
    <Animatedpage>
      <section id="about-container">
        <div className="background-image-about" style={{
          backgroundImage: "url(images/background-image-hp.jpg)"
        }}></div>
        <div className="navbar-about">
          <NavBar />
        </div>

        <div className="google-map-container">
          <div className="contact-details font-face-at">
            <h1>about</h1>
            <h2>contact</h2>
            <p>RTXP Amsterdam
              <br />
              Tel: 020 - 6261433
              <br />
              Email: info@rtxp.com
              <br />
              Adres gegevens:
              <br />
              1e Jacob van Campenstraat
              <br />
              59 1072 BD Amsterdam
            </p>
            <br />
            <h2>bereikbaarheid</h2>
            <p>
              Openbaar vervoer:
              Trams 1, 7, 19 (Halte Vijzelgracht),
              <br />
              lijn 24 (Halte Marie Heinekenplein)
              <br />
              & Metro 52 (Halte De Pijp)
            </p>
            <br />
            <h2>parkeren</h2>
            <p>
              APCOA: Eerste van der Helststraat 6
              1072 NV Amsterdam,
              Parking Museumquarter
              Nicolaas Maesstraat 2A
              1071 RA Amsterdam,
              Parkeergarage Albert Cuyp
              Ruysdaelkade 93
              1072 AM Amsterdam
            </p>
            <br />
            <h2>fiets</h2>
            <p>
              Aan de voorzijde, verderop in de straat
              en aan de overkant op het Marie Heinekenplein
              zijn meerdere fietsenrekken om je fiets aan
              te bevestigen.
            </p>
          </div>
        </div>

        <div className="pink-arrows-icon">
          <img src="images/pink-arrows-icon.svg" alt="pink arrows icon" />
        </div>
        <div className="green-cross-icon">
          <img src="images/green-cross-icon.svg" alt="green cross icon" />
        </div>
        <div className="fragile-sticker-about">
          <img src="images/our-art-is-not-fragile.svg" alt="fragile sticker" />
        </div>
      </section>
    </Animatedpage>
  )
}
