// import { useEffect, useRef } from 'react';

// const TubesCursor = () => {
//   const canvasRef = useRef(null);
//   const appRef = useRef(null);
//   const randomColors = (count) => {
//     return new Array(count).fill(0).map(() =>
//       "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
//     );
//   };

//   useEffect(() => {
//     const initTimer = setTimeout(() => {
//       import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
//         .then(module => {
//           const Tubes = module.default;
//           if (canvasRef.current && !appRef.current) {
//             appRef.current = Tubes(canvasRef.current, {
//               tubes: {
//                 colors: ["#5e72e4", "#8965e0", "#f5365c"],
//                 lights: { intensity: 15, colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"] }
//               }
//             });
//           }
//         });
//     }, 100);

//     return () => {
//       clearTimeout(initTimer);
//       if (appRef.current && typeof appRef.current.dispose === 'function')
//         appRef.current.dispose();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-20 pointer-events-none w-screen h-screen block bg-[#0a0a1a]"
//     />
//   );
// };

// export default TubesCursor;































// import { useEffect, useRef } from 'react';

// const TubesCursor = () => {
//   const canvasRef = useRef(null);
//   const appRef = useRef(null);

//   useEffect(() => {
//     const initTimer = setTimeout(() => {
//       import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
//         .then(module => {
//           const Tubes = module.default;
//           if (canvasRef.current && !appRef.current) {
//             appRef.current = Tubes(canvasRef.current, {
//               tubes: {
//                 colors: ["#5e72e4", "#8965e0", "#f5365c"],
//                 lights: { intensity: 15, colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"] }
//               }
//             });
//           }
//         });
//     }, 100);

//     return () => {
//       clearTimeout(initTimer);
//       if (appRef.current && typeof appRef.current.dispose === 'function')
//         appRef.current.dispose();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       // z-index ko -1 rakha hai aur bg wapas dark kar diya hai
//       className="fixed inset-0 z-[-1] pointer-events-none w-screen h-screen block bg-[#0a0a1a]"
//     />
//   );
// };

// export default TubesCursor;











// import { useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

// const TubesCursor = () => {
//   const canvasRef = useRef(null);
//   const appRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return;

//     const resizeCanvas = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const dpr = Math.min(window.devicePixelRatio || 1, 2);

//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//     };

//     resizeCanvas();

//     window.addEventListener('resize', resizeCanvas);

//     const initTimer = setTimeout(() => {
//       import(
//         'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
//       ).then((module) => {
//         const Tubes = module.default;

//         if (canvasRef.current && !appRef.current) {
//           appRef.current = Tubes(canvasRef.current, {
//             tubes: {
//               colors: ["#5e72e4", "#8965e0", "#f5365c"],

//               lights: {
//                 intensity: 15,
//                 colors: [
//                   "#21d4fd",
//                   "#b721ff",
//                   "#f4d03f",
//                   "#11cdef"
//                 ]
//               }
//             }
//           });
//         }
//       });
//     }, 100);

//     return () => {
//       clearTimeout(initTimer);
//       window.removeEventListener('resize', resizeCanvas);

//       if (
//         appRef.current &&
//         typeof appRef.current.dispose === 'function'
//       ) {
//         appRef.current.dispose();
//         appRef.current = null;
//       }
//     };
//   }, []);

//   return createPortal(
//     <div
//       className="fixed inset-0 pointer-events-none"
//       style={{
//         zIndex: 0,
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none block"
//         style={{
//           width: '100vw',
//           height: '100vh',
//         }}
//       />
//     </div>,
//     document.body
//   );
// };

// export default TubesCursor;













import { useEffect, useRef } from "react";

const TubesCursor = () => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const initTimer = setTimeout(async () => {
      try {
        const module = await import(
          /* @vite-ignore */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );

        // Unmount ho gaya ho ya pehle se init ho chuka ho to kuch mat karo
        if (cancelled || !canvasRef.current || appRef.current) return;

        const Tubes = module.default;
        appRef.current = Tubes(canvasRef.current, {
          tubes: {
            colors: ["#5e72e4", "#8965e0", "#f5365c"],
            lights: {
              intensity: 15,
              colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"],
            },
          },
        });
      } catch (err) {
        console.error("TubesCursor load failed:", err);
      }
    }, 100);

    return () => {
      cancelled = true;
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === "function") {
        appRef.current.dispose();
      }
      appRef.current = null;
    };
  }, []);

  return (
    // FIX: library canvas ka size parent se leti hai.
    // Ye wrapper hamesha viewport jitna hai, to canvas kabhi page jitna
    // lamba (10000px+) nahi banega aur GPU texture limit (8192) cross nahi hogi.
    <div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <canvas ref={canvasRef} className="block h-full w-full bg-[#0a0a1a]" />
    </div>
  );
};

export default TubesCursor;