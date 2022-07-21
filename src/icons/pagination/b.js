import React from "react";

function PaginationB(props) {
  return (
    <svg fill="none" viewBox="0 0 266 150" {...props}>
      <path fill="var(--solid)" d="M0 0h266v150H0z" />

      <rect
        x={72}
        y={119}
        width={20}
        height={13}
        rx={5}
        fill="var(--base-500)"
      />

      <rect x={80} y={124} width={5} height={2} fill="var(--solid-900)" />
      <circle cx={107} cy={125} r={7} fill="var(--main-500)" />
      <rect x={106} y={124} width={2} height={2} fill="white" />
      <circle cx={127} cy={125} r={7} fill="var(--base-500)" />
      <rect x={126} y={124} width={2} height={2} fill="var(--solid-900)" />
      <circle cx={147} cy={125} r={7} fill="var(--base-500)" />
      <rect x={146} y={124} width={2} height={2} fill="var(--solid-900)" />

      <rect
        x={160}
        y={119}
        width={20}
        height={13}
        rx={5}
        fill="var(--base-500)"
      />
      <rect x={166} y={124} width={5} height={2} fill="var(--solid-900)" />
    </svg>
  );
}

export default PaginationB;
