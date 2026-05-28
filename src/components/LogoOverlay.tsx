// src/components/LogoOverlay.tsx

export const LogoOverlay = ({ className }: { className?: string }) => {
  return (
    <svg
      // Quita 'absolute', 'top-0', 'left-0', 'w-full', 'h-full' de aquí
      // Deja que la clase que le pasas desde Hero controle eso.
      className={`pointer-events-none ${className}`}
      viewBox="0 0 297 248"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        id="image1"
        opacity="0"
      />

      <defs id="defs1">
        <mask id="Logo-Mask" maskUnits="userSpaceOnUse">
          <rect
            x="46.5"
            y="20"
            width="204.5"
            height="153.5"
            fill="white"
            strokeWidth="0"
            opacity="1"
            id="rect1"
          />
          <path
            id="A-cut"
            d="M 151.3,125 l24.5,37.5"
            stroke="black"
            strokeWidth="5"
          />
        </mask>
        <mask id="A-Mask" maskUnits="userSpaceOnUse">
          <rect
            x="0"
            y="180"
            width="100"
            height="47.5"
            fill="white"
            strokeWidth="0"
            id="rect2"
          />
        </mask>
      </defs>

      <g
        id="Logo"
        fill="none"
        strokeOpacity="1"
        strokeWidth="20"
        stroke="white"
        strokeLinejoin="miter"
        mask="url(#Logo-Mask)"
      >
        <path id="Triangle" d="M 55,179.5 147.5,39.5 242.5,180" />
        <path id="Main-A" d="M 95,179.5 148,97 202,180 M 120,148.5 h55" />
      </g>

      <g id="text" fill="none" strokeOpacity="1" strokeWidth="8" stroke="white">
        <path
          id="A"
          d="M11.5,230 l22,-37.5 l21.5,37.5 M17,219 h30"
          mask="url(#A-Mask)"
        />
        <path
          id="S"
          d="M79,219 l7,3 a 3.8 5 280 1 0 11 -14.5 l-7,-3 a 3.8 5.5 285 1 1 11 -14.5 l4,2"
        />
        <path id="C" d="M166,217 a 18 18 20 1 1 0 -22" />
        <path id="N" d="M195.5,227.5 v-35 l29.5,26.5 v-34.5 " />
        <path id="T" d="M253,188.5 h33 M269,184.5 v43 " />
      </g>
    </svg>
  );
};
