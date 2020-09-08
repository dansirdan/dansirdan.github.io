// import React from 'react';
// import { Parallax, Background } from 'react-parallax';

// const ParallaxEx = () => (
//   <div style={styles}>
//     {/* <Hello name="Parallax" /> */}

//     <Parallax
//       bgImage={image1}
//       strength={500}
//       renderLayer={percentage => (
//         <div>
//           <div style={{
//             // top: '90%',
//             height: 900,
//             transform: `skewY(-15deg)`,
//             background: `linear-gradient(15deg, #0fb8ad, #1fc8db , #2cb5e8)`,
//             transformOrigin: "top left"
//           }} />
//           <div style={{
//             position: "absolute",
//             left: "50%",
//             top: "10%",
//             transform: "translate(-50%,-50%)",
//             width: percentage * 500,
//             height: percentage * 100,
//             zIndex: 1
//           }}>
//             Test
//           </div>
//         </div>
//       )}
//     >
//       <div style={{
//         height: 1000
//       }}>


//       </div>
//     </Parallax>

//     <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
//       <div style={{ height: 500 }}>
//         <div style={insideStyles}>
//           <Projects />
//         </div>
//       </div>
//     </Parallax>
//     <h1>| | |</h1>
//     <Parallax bgImage={image2} strength={-100}>
//       <div style={{ height: 500 }}>
//         <div style={insideStyles}>
//           <About />
//         </div>
//       </div>
//     </Parallax>
//     <h1>| | |</h1>
//     <Parallax
//       bgImage={image4}
//       strength={200}
//       renderLayer={percentage => (
//         <div>
//           <div
//             style={{
//               position: "absolute",
//               background: `rgba(255, 125, 0, ${percentage * 1})`,
//               left: "50%",
//               top: "50%",
//               borderRadius: "50%",
//               transform: "translate(-50%,-50%)",
//               width: percentage * 500,
//               height: percentage * 500
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               background: `rgba(255, 255, 0, ${percentage * 1})`,
//               right: "50%",
//               top: "50%",
//               borderRadius: "50%",
//               transform: "translate(-50%,-10%)",
//               width: percentage * 300,
//               height: percentage * 300
//             }}
//           />
//         </div>
//       )}
//     >
//       <div style={{ height: 500 }}>
//         <div style={insideStyles}>
//           <Contact />
//         </div>
//       </div>
//     </Parallax>
//     <div style={{ height: 100 }} />
//     <svg style={{ height: "210", width: "500" }}>
//       <polygon points="200,10 250,190 160,210" style={{ fill: "lime", stroke: "purple", strokeWidth: 1 }} />
//     </svg>  </div>
// );
// export default ParallaxEx;