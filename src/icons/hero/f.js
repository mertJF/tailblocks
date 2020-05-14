import React from "react"

function HeroF() {
  return (
    <svg viewBox="0 0 266 150" fill="none">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      <rect
        x={81}
        y={92}
        width={104}
        height={4}
        rx={2}
        fill="var(--base-500)"
      />
      <rect
        x={97}
        y={81}
        width={72}
        height={5}
        rx={2.5}
        fill="var(--solid-900)"
      />
      <path
        d="M148 116a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2h-25a2 2 0 01-2-2v-6z"
        fill="var(--main-500)"
      />
      <rect
        x={89}
        y={114}
        width={55}
        height={10}
        rx={2}
        fill="var(--base-400)"
      />
      <rect
        x={85}
        y={100}
        width={97}
        height={4}
        rx={2}
        fill="var(--base-500)"
      />
      <path
        d="M119.778 61h26.444A3.778 3.778 0 00150 57.222V30.778A3.778 3.778 0 00146.222 27h-26.444A3.778 3.778 0 00116 30.778v26.444A3.778 3.778 0 00119.778 61zm0 0l20.778-20.778L150 49.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z"
        stroke="var(--base-500)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default HeroF;
