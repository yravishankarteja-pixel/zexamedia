export function AmbientGeometry() {
  return (
    <div className="ambient-geometry" aria-hidden="true">
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <pattern
            id="zexa-triangle-mesh"
            width="120"
            height="104"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 104 60 0l60 104M0 0l60 104L120 0M0 52h120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="zexa-neon-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#61E003" stopOpacity="0" />
            <stop offset="0.48" stopColor="#8EEA4D" stopOpacity="0.95" />
            <stop offset="1" stopColor="#61E003" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect
          className="ambient-mesh"
          x="-160"
          y="-120"
          width="1920"
          height="1240"
          fill="url(#zexa-triangle-mesh)"
        />

        <g className="ambient-triangle ambient-triangle-one">
          <polygon points="118,310 260,74 402,310" />
        </g>
        <g className="ambient-triangle ambient-triangle-two">
          <polygon points="1210,830 1370,560 1530,830" />
        </g>
        <g className="ambient-triangle ambient-triangle-three">
          <polygon points="1130,220 1200,104 1270,220" />
        </g>
        <g className="ambient-triangle ambient-triangle-four">
          <polygon points="245,875 325,740 405,875" />
        </g>

        <path
          className="ambient-light-streak ambient-light-streak-one"
          d="M-120 790 230 440 530 740"
          pathLength="1"
        />
        <path
          className="ambient-light-streak ambient-light-streak-two"
          d="M1190 -100 1530 240 1690 80"
          pathLength="1"
        />
      </svg>
    </div>
  );
}
