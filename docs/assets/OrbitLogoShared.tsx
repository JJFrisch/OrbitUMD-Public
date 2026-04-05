// @ts-nocheck

type OrbitLogoSharedProps = {
  width: number;
  height: number;
  iconContainerClassName: string;
  textClassName: string;
};

export default function OrbitLogoShared({
  width,
  height,
  iconContainerClassName,
  textClassName,
}: OrbitLogoSharedProps) {
  return (
    <span className="orbit-logo-shared-root">
      <span className={iconContainerClassName} aria-hidden="true">
        <svg
          width={width}
          height={height}
          viewBox="0 0 100 100"
          fill="none"
          overflow="visible"
          className="orbit-logo-svg"
        >
          <g transform="rotate(-28 50 50)">
            <ellipse
              className="orbit-ring"
              cx="50"
              cy="50"
              rx="34"
              ry="13"
              fill="none"
              stroke="#94A3B8"
              strokeOpacity="0.55"
              strokeWidth="3"
            />
            <circle className="orbit-sat" cx="76" cy="40" r="4.5" fill="#F59E0B" />
          </g>
          <circle className="orbit-core" cx="50" cy="50" r="14" fill="#0F172A" />
          <circle cx="45" cy="45" r="4.5" fill="rgba(255,255,255,0.16)" />
        </svg>
      </span>
      <span className={textClassName}>Orbit<span>UMD</span></span>
    </span>
  );
}
