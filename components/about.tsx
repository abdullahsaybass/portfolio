"use client";
import Image from "next/image";


export default function AboutSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#0a0f1c] text-white rounded-2xl p-10 md:p-16 max-w-[1200px] mx-auto">
      {/* Left Section */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-[36px] font-medium leading-snug">
          Crafting Modern & Intuitive Web Experiences
        </h1>
        <h2 className="mt-2 text-lg font-medium text-[#4895FC]">
          UI/UX Design & Web Development
        </h2>
        <p className="mt-6 text-[16px] text-gray-300 leading-relaxed">
          I create responsive, user-friendly websites and digital interfaces that combine aesthetic appeal with performance. Skilled in wireframing, prototyping, and front-end development using modern technologies to deliver engaging digital experiences.
        </p>

        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#0F4DFF] to-[#4895FC] text-white rounded-lg font-medium shadow-md hover:opacity-90 transition">
          View Projects
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
        {/* Glow effect */}
        <div className="absolute w-72 h-72 rounded-full bg-blue-600/40 blur-3xl"></div>

        {/* Main Image */}
        <Image
                src="/new.png"
                alt="googl Image"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />
      </div>
    </section>
  );
}

// 'use client';
// import React from 'react';

// const topNodes = [
//   { label: '6', x: 40 },
//   { label: '5', x: 100 },
//   { label: '4', x: 160 },
//   { label: '3', x: 220 },
//   { label: '2', x: 280 },
// ];

// const bottomNode = { label: '1', x: 160, y: 320 };

// export default function LotusFlow() {
//   return (
//     <div className="relative w-[320px] h-[360px] mx-auto">
//       <svg viewBox="0 0 320 360" className="absolute top-0 left-0 w-full h-full">
//         {/* Bottom node circle */}
//         <circle cx={bottomNode.x} cy={bottomNode.y} r="20" fill="#6C63FF" />

//         {/* Lotus-style curved paths */}
//         {topNodes.map((pt, i) => {
//           const pathId = `path-${i}`;
//           // Lotus petal shape: curves bend outwards then meet bottom
//           const controlX1 = pt.x < bottomNode.x ? pt.x - 60 : pt.x + 60;
//           const controlY1 = (bottomNode.y + pt.y) / 2 - 60;
//           const controlX2 = bottomNode.x;
//           const controlY2 = bottomNode.y - 80;

//           const pathD = `M${bottomNode.x},${bottomNode.y} 
//                          C${controlX1},${controlY1} ${controlX2},${controlY2} ${pt.x},40`;

//           return (
//             <g key={i}>
//               <path
//                 id={pathId}
//                 d={pathD}
//                 fill="none"
//                 stroke="#ccc"
//                 strokeWidth="2"
//               />
//               {/* Flowing dot animation */}
//               <circle r="4" fill="#6C63FF">
//                 <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
//                   <mpath xlinkHref={`#${pathId}`} />
//                 </animateMotion>
//               </circle>
//             </g>
//           );
//         })}
//       </svg>

//       {/* Top nodes */}
//       {topNodes.map((pt, i) => (
//         <div
//           key={i}
//           className="absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg font-bold"
//           style={{ top: 20, left: pt.x - 20 }}
//         >
//           {pt.label}
//         </div>
//       ))}

//       {/* Bottom node label */}
//       <div
//         className="absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg font-bold"
//         style={{ top: bottomNode.y - 20, left: bottomNode.x - 20 }}
//       >
//         {bottomNode.label}
//       </div>
//     </div>
//   );
// }
