import React from "react"

function HeroC() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      <rect
        x={133}
        y={86}
        width={29}
        height={10}
        rx={2}
        fill="var(--main-500)"
      />
      <rect
        x={168}
        y={86}
        width={29}
        height={10}
        rx={2}
        fill="var(--base-400)"
      />
      <rect
        x={133}
        y={64}
        width={104}
        height={4}
        rx={2}
        fill="var(--base-500)"
      />
      <rect
        x={133}
        y={53}
        width={72}
        height={5}
        rx={2.5}
        fill="var(--solid-900)"
      />
      <rect
        x={133}
        y={72}
        width={97}
        height={4}
        rx={2}
        fill="var(--base-500)"
      />
      <path
        d="M62.778 92h26.444A3.778 3.778 0 0093 88.222V61.778A3.778 3.778 0 0089.222 58H62.778A3.778 3.778 0 0059 61.778v26.444A3.778 3.778 0 0062.778 92zm0 0l20.778-20.778L93 80.667M72.222 68.389a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z"
        stroke="var(--base-500)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HeroC;
