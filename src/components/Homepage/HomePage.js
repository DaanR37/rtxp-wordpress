import NavBar from "../Navbar/NavBar";
import { Link } from 'react-router-dom';
import "./homepage.scss";

export default function HomePage() {
    return (
        <section id="homepage-container">
            <div className="background-image" style={{
                backgroundImage: "url(images/background-image.png)"
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
                <div className="fragile-sticker">
                    <img src="images/our-art-is-not-fragile.svg" alt="fragile sticker" />
                </div>
                <div className="socials-container">
                    <img src="images/facebook-logo.svg" alt="facebook logo" />
                    <img src="images/instagram-logo.svg" alt="instagram logo" />
                </div>
                <div className="menu-sticker">
                    <Link to="/" reloadDocument>
                        <img src="images/rtxp-menu-sticker.svg" alt="menu sticker" />
                    </Link>
                </div>
            </div>
        </section>
    )
}




// import './app.scss';

// // import PostTitles from "./components/PostTitles";

// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       media: []
//     }
//   }
//   componentDidMount() {
//     let mediaURL = "http://localhost:8888/wp-json/wp/v2/media";
//     fetch(mediaURL)
//       .then(response => response.json())
//       .then(response => {
//         this.setState({
//           media: response
//         })
//       })
//   }


//   render() {
//     let media = this.state.media.map((media, index) => {
//       return (
//         <div key={index}>
//           <img src={media.media_details.sizes.large.source_url}
//             alt={""}
//           />
//         </div>
//       )
//     })
//     return (
//       <div className='app'>
//         {/* <h1>media</h1> */}
//         {media}
//       </div>
//     )
//   }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">React JS WordPress api example</header>
// //       <PostTitles />
// //     </div>
// //   );
// // }

// export default App;

