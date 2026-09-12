export default function NetworkBackground() {
  // Fixed node positions (percent-based) so the pattern feels deliberate,
  // not randomly generated on every render.
  const nodes = [
    { x: 8, y: 82, r: 10 },
    { x: 92, y: 22, r: 5 },
    { x: 24, y: 34, r: 3 },
    { x: 66, y: 46, r: 3 },
    { x: 88, y: 78, r: 4 },
    { x: 44, y: 16, r: 3 },
  ];

  const lines = [
    [0, 3],
    [0, 4],
    [3, 1],
    [3, 5],
    [2, 3],
    [2, 0],
    [1, 4],
    [5, 1],
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(#3ED26B 1px, transparent 1px), linear-gradient(90deg, #3ED26B 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 85%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3ED26B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3ED26B" stopOpacity="0" />
          </radialGradient>
        </defs>
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#3ED26B"
            strokeOpacity="0.35"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="url(#nodeGlow)" />
            <circle cx={n.x} cy={n.y} r={n.r * 0.18} fill="#3ED26B" />
          </g>
        ))}
      </svg>
    </div>
  );
}
