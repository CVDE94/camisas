export const AscntLogo = ({ className = "", animated = false }: { className?: string; animated?: boolean }) => {

    // Only apply animation classes if 'animated' prop is true
  const animClass = animated ? "draw" : "";
  const growClass = animated ? "grow" : "";
  return (
    <svg version="1.1" fill="none" viewBox="0 0 278 228" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* -------------------- CSS -------------------- */}
      <style>
        {`
            /* ----- Draw Animation ----- */
            @keyframes drawFrames 
            {
                to { stroke-dasharray: 100% 0% ; }
            }
            .draw 
            {
                stroke-dasharray: 0% 100% ;
                animation: drawFrames 1s ease-out forwards;
            }
            
            /* -----Grow Animation ----- */
            @keyframes growFrames 
            {
                0%   { transform: scale(0.8); }
                100% { transform: scale(1); }
            }
            .grow 
            {
                transform: scale(0.8);
                animation: growFrames 1s forwards;
                transform-origin: center;
            }
        `}
      </style>

      {/* -------------------- Masks -------------------- */}
      <defs id="defs1">
        <mask id="Text_Logo_Mask" mask-type="luminance" maskUnits="userSpaceOnUse">
          <rect x="38.5" y="0" width="204.5" height="153.5" fill="white" strokeWidth="0" opacity="1" />
          <path id="A-cut" d="M 151.3,125 m-8,-21 l24.5,37.5" stroke="black" strokeWidth="5" />
        </mask>
        <mask id="A-Mask" mask-type="luminance" maskUnits="userSpaceOnUse">
          <rect x="0" y="180" width="100" height="47.5" fill="white" strokeWidth="0" />
        </mask>
      </defs>

      {/* -------------------- Whole Image -------------------- */}
      {/* Removed the 5s delay so you can actually see it start, or set it to 0s */}
      <g className={growClass} style={{ animationDelay: "1.8s" }}>
        {/* Icon */}
        <g fill="none" strokeOpacity="1" strokeWidth="20" stroke="white" strokeLinejoin="miter" mask="url(#Text_Logo_Mask)">
          <path id="Triangle"   className={animClass} style={{ animationDelay: "0.2s" }} d="M 47,158.5 l 92.5,-140 l95,140.5" />
          <path id="Main-A"     className={animClass} style={{ animationDelay: "0.6s" }} d="M 95,179.5 m-8,-21 l 53,-82.5 54,83" />
          <path id="A-Detail"   className={animClass} style={{ animationDelay: "1s" }} d="M 95,179.5 m-8,-21 m 53,-82.5 m 54,83 m -82,-31.5 h 55" />
        </g>

        {/* Text */}
        <g fill="none" strokeOpacity="1" strokeWidth="8" stroke="white">
          <path id="Logo_A" className={animClass} style={{ animationDelay: "1.0s" }} d="M 011.5, 230 m-8,0 l22,-37.5 l21.5,37.5 M17,219m-8,0 h30" mask="url(#A-Mask)" />
          <path id="Logo_S" className={animClass} style={{ animationDelay: "1.2s" }} d="M 079, 219 m-8,0 l7,3 a 3.8 5 280 1 0 11 -14.5 l-7,-3 a 3.8 5.5 285 1 1 11 -14.5 l4,2" />
          <path id="Logo_C" className={animClass} style={{ animationDelay: "1.4s" }} d="M 166, 217 m-8,0 a 18 18 20 1 1 0 -22" />
          <path id="Logo_N" className={animClass} style={{ animationDelay: "1.6s" }} d="M 195.5, 227.5 m-8,0 v-35 l29.5,26.5 v-34.5 " />
          <path id="Logo_T" className={animClass} style={{ animationDelay: "1.8s" }} d="M 253, 188.5 m-8,0 h33 M269,184.5 m-7,0 v43 " />
        </g>
      </g>
    </svg>
  );
};