function RadialGradient({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx={`${width / 2}`}
        cy={`${height / 2}`}
        rx={`${width / 2}`}
        ry={`${height / 2}`}
        fill="url(#paint0_radial_16_10)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_16_10"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(${width / 2} ${height / 2}) rotate(90) scale(${
            height / 2
          } ${width / 2})`}
        >
          <stop stopColor="#763CAC" />
          <stop offset="1" stopColor="#320F85" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default RadialGradient;
