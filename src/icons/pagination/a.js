import React from "react";

function PaginationA(props) {
  return (
    <svg fill="none" viewBox="0 0 266 150" {...props}>
      <path fill="var(--solid)" d="M0 0h266v150H0z" />

      <ellipse cx={77} cy={125} rx={7} ry={5} stroke="var(--solid-900)" />
      <rect x={76} y={124} width={2} height={2} fill="var(--solid-900)" />
      <circle cx={97} cy={125} r={7} fill="var(--main-500)" />
      <rect x={96} y={124} width={2} height={2} fill="white" />
      <circle cx={117} cy={125} r={7} stroke="var(--solid-900)" />
      <rect x={116} y={124} width={2} height={2} fill="var(--solid-900)" />
      <circle cx={137} cy={125} r={7} stroke="var(--solid-900)" />
      <rect x={136} y={124} width={2} height={2} fill="var(--solid-900)" />
      <circle cx={157} cy={125} r={7} stroke="var(--solid-900)" />
      <rect x={156} y={124} width={2} height={2} fill="var(--solid-900)" />
      <ellipse cx={177} cy={125} rx={7} ry={5} stroke="var(--solid-900)" />
      <rect x={176} y={124} width={2} height={2} fill="var(--solid-900)" />
    </svg>
  );
}

export default PaginationA;
