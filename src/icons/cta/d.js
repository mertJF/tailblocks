import React from "react"

function CTAD() {
  return (
    <svg fill="none" viewBox="0 0 266 150">
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      <rect
        x={20}
        y={68}
        width={26}
        height={5}
        rx={2.5}
        fill="var(--main-500)"
      />
      <rect
        x={20}
        y={77}
        width={92}
        height={5}
        rx={2.5}
        fill="var(--solid-900)"
      />
      <rect
        x={206}
        y={70}
        width={40}
        height={10}
        rx={2}
        fill="var(--base-400)"
      />
      <rect
        x={160}
        y={70}
        width={40}
        height={10}
        rx={2}
        fill="var(--base-400)"
      />
    </svg>
  )
}

export default CTAD;
