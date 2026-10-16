// import React from "react";
// import { Fragment } from "react";

import "./App.css";

// function App() {
//   const username1 = "Mary";
//   const username2 = "Dave";

//   return (
//     // <div>
//     // <React.Fragment>
//     // <Fragment>
//     <>
//       <h1 className="counter">Hello World</h1>

//       {/* <img src="https://cats.com/image1.png"></img> */}
//       <img src="https://cats.com/image1.png" />
//       <input />
//       <br />

//       <p>
//         <strong>{username1}</strong>
//       </p>

//       <p>
//         <strong>{username2}</strong>
//       </p>

//       <p>1 + 1 = {1 + 1}</p>

//       <p>{"Hello, React".toUpperCase()}</p>

//       {/* falsy Значення */}
//       {0}
//       {""}
//       {false}
//       {null}
//       {undefined}
//     </>
//     // </Fragment>
//     // </React.Fragment>
//     // </div>
//   );
// }
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatInfo from "./components/CatInfo/CatInfo";

import CATS from "./cats.json";

function App() {
  return (
    <>
      <Header />

      <main>
        <h1>Cats store</h1>

        {CATS.map((cat) => (
          <CatInfo key={cat.id} cat={cat} />
        ))}
      </main>

      <Footer />
    </>
  );

  // return CATS.map((cat) => <CatInfo />);
}

//  <CatInfo
//           key={cat.id}
//           id={cat.id}
//           name={cat.name}
//           image={cat.image}
//           email={cat.email}
//           age={cat.age}
//           available={cat.available}
//         />

/**
 *
 *
 *
 *
 *
 *
 *
 */
// console.log(CATS);
// return (
//   <>
//     <CatInfo />
//     <CatInfo />
//     <CatInfo />
//     <CatInfo />
//     <CatInfo />
//     <CatInfo />
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>Mr. Whiskerson</h3>
//       <p>whiskerson@catmail.com</p>
//       <p>
//         Age: <strong>3</strong>
//       </p>
//       <p>Available: Yes</p>
//     </div>
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>Mr. Whiskerson</h3>
//       <p>whiskerson@catmail.com</p>
//       <p>
//         Age: <strong>3</strong>
//       </p>
//       <p>Available: Yes</p>
//     </div>
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>Mr. Whiskerson</h3>
//       <p>whiskerson@catmail.com</p>
//       <p>
//         Age: <strong>3</strong>
//       </p>
//       <p>Available: Yes</p>
//     </div>
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>Mr. Whiskerson</h3>
//       <p>whiskerson@catmail.com</p>
//       <p>
//         Age: <strong>3</strong>
//       </p>
//       <p>Available: Yes</p>
//     </div>
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>Mr. Whiskerson</h3>
//       <p>whiskerson@catmail.com</p>
//       <p>
//         Age: <strong>3</strong>
//       </p>
//       <p>Available: Yes</p>
//     </div>
//     <div>
//       <img
//         src="https://cataas.com/cat/says/Hello"
//         width="400px"
//         height="300px"
//         alt="Mr. Whiskerson"
//       />
//       <h3>Mr. Whiskerson</h3>
//       <p>whiskerson@catmail.com</p>
//       <p>
//         Age: <strong>3</strong>
//       </p>
//       <p>Available: Yes</p>
//     </div>
//   </>
// );

export default App;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
